import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DateTime } from '@syncfusion/ej2-angular-charts';
import {
  MedicneUserService,
  MedicneUser,
  TakingTime,
  Times,
} from '../medicne-user.service';

@Component({
  selector: 'app-enter-a-medicine',
  templateUrl: './enter-a-medicine.component.html',
  styleUrls: ['./enter-a-medicine.component.css'],
})
export class EnterAMedicineComponent implements OnInit {
  take = new TakingTime(
    new Times(new Date(), '', ''),
    new Times(new Date(), '', ''),
    new Times(new Date(), '', '')
  );

  constructor(private MedicneUserService: MedicneUserService) {}

  ngOnInit(): void {
    this.getMedicneUser();
    this.getMedicnes();
  }
  searchText: any;

  medicneUser: MedicneUser[] = [];
  medicnes: any[] = [];
  usermedicne: {
    MedicneName: string;
    MgQuantity: number;
    TakingTime: TakingTime;
    AmountOfPills: number;
    CapletsByHour: number;
    StartDay: Date;
  };
  userAccess: string = JSON.parse(localStorage.getItem('access') || null || ' ')
    .userId;
  flag: boolean = false;
  openE: boolean = false;
  openM: boolean = false;
  openN: boolean = false;
  OpenE() {
    if (!this.openE) this.openE = true;
    else this.openE = false;
  }
  OpenN() {
    if (!this.openN) this.openN = true;
    else this.openN = false;
  }
  OpenM() {
    if (!this.openM) this.openM = true;
    else this.openM = false;
  }
  setTime(medicneUser: NgForm) {
    if (medicneUser.value.Evening) {
      this.take.Evening.time = 'Evening';
      this.take.Evening.alert = medicneUser.value.alartE;
    }
    if (medicneUser.value.Noon) {
      this.take.Noon.time = 'Noon';
      this.take.Noon.alert = medicneUser.value.alartN;
    }
    if (medicneUser.value.Morning) {
      this.take.Morning.time = 'Morning';
      this.take.Morning.alert = medicneUser.value.alartM;
    }
  }
  getCategory(e: any) {
    console.log(e.target.value);
    this.searchText = e.target.value.trim();
  }
  onSubmit(medicneUser: NgForm) {
    this.setTime(medicneUser);
    this.usermedicne = {
      MedicneName: this.searchText,
      MgQuantity: medicneUser.value.MgQuantity,
      TakingTime: this.take,
      AmountOfPills: medicneUser.value.AmountOfPills,
      CapletsByHour: medicneUser.value.CapletsByHour,
      StartDay: medicneUser.value.StartDay,
    };
    this.MedicneUserService.addMedicneUser(this.usermedicne).subscribe({
      next: (v) => {
        alert('enter medican to calendar has been successful');
      },
      error: (e) => {
        console.log(e);
        alert('can not enter another medican health poliacy');
      },
    });
  }

  getMedicneUser() {
    this.MedicneUserService.getMedicneUser().subscribe({
      next: (v) => {
        this.medicneUser = v;
      },
      error: (e) => {},
    });
  }
  getMedicnes() {
    this.MedicneUserService.getMedicnes().subscribe({
      next: (v) => {
        this.medicnes = v;
      },
      error: (e) => {},
    });
  }
}
