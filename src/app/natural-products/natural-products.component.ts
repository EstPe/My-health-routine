import { Component, OnInit, ViewChild } from '@angular/core';

import { ProductsService, Product } from '../products.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-natural-products',
  templateUrl: './natural-products.component.html',
  styleUrls: ['./natural-products.component.css'],
})
export class NaturalProductsComponent implements OnInit {
  @ViewChild(SidebarComponent) sidelist: SidebarComponent | null;
  img: String = '';
  numberPattern = /\d+/g;
  value: string = '';
  managerAccess: number;
  constructor(
    private productServer: ProductsService,
    private router: Router,
    private UserServic: UserService
  ) {}
  orders: Product[] = [];
  ngOnInit(): void {
    this.productServer.getImage().subscribe((getNewProduct: any) => {
      this.img = getNewProduct;
    });
    this.managerAccess = JSON.parse(
      localStorage.getItem('access') || null || ' '
    ).access;
    this.getOrderUser();
  }

  valdtion(product: NgForm) {
    //image testing
    if (!product.value.image.match(/((http|https):)/)) {
      alert('image pattern incorrect');
      return false;
    }
    //name testing
    if (product.value.name.length < 2) {
      alert('name to short');
      return false;
    }
    if (
      product.value.name.length <= 0 &&
      product.value.name.match(this.numberPattern) != null
    )
      return false;
    return true;
  }
  getCategory(e: any) {
    console.log('is here');
    this.value = e.target.value;
  }
  onSubmit(product: NgForm) {
    if (this.valdtion(product)) {
      product.value.Quantity_Of_Purchases = 0;
      product.value.category = this.value;
      this.productServer.addProduct(product.value).subscribe({
        next: (v) => {
          alert('product Add successfully');
          window.location.reload();
        },
        error: (e) => alert('product alredy added'),
      });
    }
  }

  getOrderUser() {
    this.productServer.userProductThatUserBuy().subscribe({
      next: (v) => {
        console.log(v);
        this.orders = v;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
