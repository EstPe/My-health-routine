import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { threadId } from 'worker_threads';

@Injectable({
  providedIn: 'root',
})
export class MedicneUserService {
  baseURL: string = 'http://localhost:8000/api/MedicneUser/';
  headers = { 'content-type': 'application/json' };
  constructor(private http: HttpClient, private router: Router) {}
  addMedicneUser(user: Object): Observable<any> {
    let body = JSON.stringify(user);
    return this.http.post(this.baseURL + 'addMedicneUser', body, {
      headers: this.headers,
    });
  }
  getMedicneUser(): Observable<any> {
    return this.http.get(this.baseURL + 'getMedicneUser');
  }
  getMedicnes(): Observable<any> {
    return this.http.get(this.baseURL + 'getMedicnes');
  }
  updateMedicneUser(medUser: MedicneUser): Observable<any> {
    let body = JSON.stringify(medUser);

    return this.http.put(this.baseURL + 'updateMed/' + medUser._id, body, {
      headers: this.headers,
    });
  }
  deleteMedicneUser(medUser: MedicneUser): Observable<any> {
    return this.http.delete(
      this.baseURL + 'deleteMedUser/' + medUser.MedicneName
    );
  }
  // deleteMedicneUserByCurrentDay(): Observable<any> {
  //   return this.http.delete(this.baseURL + 'deleteMedUserByCourrentDay');
  // }
  sendEmailReminder(): Observable<any> {
    return this.http.get(this.baseURL + 'sendReminder');
  }
  approve(): Observable<any> {
    return this.http.get(this.baseURL + 'approved');
  }
  notApproveIgnor(): Observable<any> {
    return this.http.get(this.baseURL + 'notApprovedIgnor');
  }
}

export class Times {
  approvDate: Date;
  time: string;
  alert: string;
  constructor(approvDate: Date, time: string, alert: string) {
    this.approvDate = approvDate;
    this.time = time;
    this.alert = alert;
  }
}
export class TakingTime {
  Morning: Times;
  Noon: Times;
  Evening: Times;
  constructor(Morning: Times, Noon: Times, Evening: Times) {
    this.Morning = Morning;
    this.Noon = Noon;
    this.Evening = Evening;
  }
}
export class MedicneUser {
  _id: string;
  userId: string;
  MedicneName: string;
  MgQuantity: number;
  TakingTime: TakingTime;
  AmountOfPills: number;
  CapletsByHour: number;
  StartDay: Date;
  constructor(
    _id: string,
    userId: string,
    MedicneName: string,
    MgQuantity: number,
    TakingTime: TakingTime,
    AmountOfPills: number,
    CapletsByHour: number,
    StartDay: Date
  ) {
    this._id = this._id;
    this.userId = userId;
    this.MedicneName = MedicneName;
    this.MgQuantity = MgQuantity;
    this.TakingTime = TakingTime;
    this.AmountOfPills = AmountOfPills;
    this.CapletsByHour = CapletsByHour;
    this.StartDay = StartDay;
  }
}
