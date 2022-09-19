import { Component, OnInit } from '@angular/core';
import { MedicneUserService } from '../medicne-user.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css'],
})
export class ReminderComponent implements OnInit {
  constructor(private medService: MedicneUserService) {}

  ngOnInit(): void {}
  approve() {
    this.medService.approve().subscribe({
      next: (v) => {
        console.log(v);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
  // notApproveIgnor() {
  //   this.medService.notApproveIgnor().subscribe({
  //     next: (v) => {},
  //     error: (e) => {},
  //   });
  // }
}
