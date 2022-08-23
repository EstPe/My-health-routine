import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { json } from 'express';
import { ProductsService, Product } from '../products.service';
import { jsPDF } from 'jspdf';
import { OrderService } from '../order.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  constructor(
    private productServer: ProductsService,
    private orderService: OrderService
  ) {}
  @ViewChild('content', { static: false }) el?: ElementRef;
  access: number;
  ngOnInit(): void {
    this.getOrderUser();
    this.getAllOrders();
    this.access = JSON.parse(
      localStorage.getItem('access') || null || ' '
    ).access;
  }

  ordersUser: Product[] = [];
  Allorders: Product[] = [];
  totalSum: number = 0;
  getOrderUser() {
    this.productServer.userProductThatUserBuy().subscribe({
      next: (v) => {
        console.log(v);
        this.ordersUser = v;
        for (let i = 0; i < this.ordersUser.length; i++) {
          this.totalSum += this.ordersUser[i].price;
        }
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
  getAllOrders() {
    this.orderService.getAllOrder().subscribe({
      next: (v) => {
        console.log(v);
        this.Allorders = v;
        for (let i = 0; i < this.Allorders.length; i++) {
          this.totalSum += this.Allorders[i].price;
        }
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
  makePDF(): void {
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el?.nativeElement, {
      callback: (pdf) => {
        pdf.save('demo.pdf');
      },
    });
  }
  delivered(checkOut: Product) {
    this.orderService.updateCheckout(checkOut).subscribe({
      next: (v) => {
        console.log(v);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
