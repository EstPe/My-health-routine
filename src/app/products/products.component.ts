import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private acRout: ActivatedRoute) {}
  CategoryId: number = 0;
  ngOnInit(): void {
    this.CategoryId = this.acRout.snapshot.params['SerialNumber'];
  }
}
