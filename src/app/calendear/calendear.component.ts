import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendear',
  templateUrl: './calendear.component.html',
  styleUrls: ['./calendear.component.css'],
})
export class CalendearComponent implements OnInit {
  constructor() {}
  myDate: Date = new Date();

  monthNames: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  d: Date = new Date();
  date: string = '';
  ngOnInit(): void {
    this.date = this.monthNames[this.d.getMonth()];
  }

  changeDate() {
    this.date = this.monthNames[this.d.getMonth() - 1];
  }
  goFowardDate() {
    this.date = this.monthNames[this.d.getMonth()];
  }
  // {{ myDate | date: "MMMM yyy" }}
  index: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  month: string[] = [
    'January ',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December ',
  ];
  curentMonth() {
    for (let i of this.month) {
    }
  }
  month1: string = 'marchd';
  march: string = 'march';
  march1: string = 'marchd';
  ester: string = 'estedr';
  march12: string = 'ma6rchd';
  ester12: string = 'estedr';
}
