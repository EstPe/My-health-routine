import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  NameStore: String = 'My Healthy Routine';
  address: String = 'Sesame Street, Haifa';
  tel: String = '1-800-400-400';


}
