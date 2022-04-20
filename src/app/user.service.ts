import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseURL: string = 'http://localhost:8080/';
  headers = { 'content-type': 'application/json' };

  constructor(private http: HttpClient) {}
  userId: any;
  setUserConected(userId: any) {
    this.userId = userId;
  }

  getUsers(): Observable<any> {
    return this.http.get(this.baseURL + 'users');
  }
  addUser(user: User): Observable<any> {
    let body = JSON.stringify(user);
    console.log(user);
    return this.http.post(this.baseURL + 'users', body, {
      headers: this.headers,
    });
  }
  getUserByEmail(user: User): Observable<any> {
    return this.http.get(this.baseURL + 'filterUsersByEmail/' + user.email);
  }
  getUserById(): Observable<any> {
    console.log(this.userId);
    return this.http.get(this.baseURL + 'filterUsersById/' + this.userId);
  }
  updateUser(user: User): Observable<any> {
    let body = JSON.stringify(user);
    console.log(user.id);
    return this.http.put(this.baseURL + 'users/' + user.id, body, {
      headers: this.headers,
    });
  }

  // deleteProduct(user: User): Observable<any> {
  //   return this.http.delete(this.baseURL + 'user/' + user.id);
  // }
}
export enum AccessUser {
  user = 1,
  supplier = 2,
  manager = 3,
}

export class User {
  id: number;
  name: string;
  email: string;
  password: number;
  phone: string;
  image: string;
  access: Number;
  loginAttempts: number;

  constructor(
    id: number,
    name: string,
    email: string,
    password: number,
    phone: string,
    image: string,
    access: Number,
    logniAttempts: number
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.image = image;
    this.access = access;
    this.loginAttempts = logniAttempts;
  }
}
