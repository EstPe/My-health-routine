import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-health-statement',
  templateUrl: './health-statement.component.html',
  styleUrls: ['./health-statement.component.css'],
})
export class HealthStatementComponent implements OnInit {
  constructor(private router: Router, private userSerivce: UserService) {}
  fileHealthStatement: boolean = false;

  Height: number = 1.6;
  Weight: number = 60;
  ngOnInit(): void {}
  onSubmit() {
    let userHealth = {
      height: this.Height,
      weight: this.Weight,
    };
    console.log(userHealth);
    this.userSerivce.HealthStatement(userHealth).subscribe({
      next: (v) => {
        console.log(v);
      },
      error: (e) => {
        console.log(e);
      },
    });
    // this.fileHealthStatement = true;
    this.router.navigateByUrl('/home');
  }
}
