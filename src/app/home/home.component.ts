import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private UserServic: UserService) {}

  userConnected: any;
  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.UserServic.getUserById().subscribe({
      next: (v) => (this.userConnected = v.data.name),
      error: (e) => console.log(e),
    });
  }
}
