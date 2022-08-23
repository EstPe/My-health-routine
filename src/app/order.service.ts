import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  baseURL: string = 'http://localhost:8000/api/checkout/';
  headers = { 'content-type': 'application/json' };
  constructor(private http: HttpClient) {}
  getAllOrder(): Observable<any> {
    return this.http.get(this.baseURL + 'checkouts');
  }
  updateCheckout(checkOut: Product): Observable<any> {
    let body = JSON.stringify(checkOut);
    return this.http.put(
      this.baseURL + 'updateDelivery/' + checkOut._id,
      body,
      {
        headers: this.headers,
      }
    );
  }
}
