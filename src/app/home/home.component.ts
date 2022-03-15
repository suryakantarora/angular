import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userName: any;
  countryList: any;

  constructor(
    private rest: RestService
  ) { }

  ngOnInit(): void {
    // this.userName = localStorage.getItem('username');
    this.rest.sendGetRequest('all').subscribe(
      (result: any) => {
        console.log('Success');
        this.countryList = result;
      }, (error: any) => {
        console.log('Error');
      }
    );
  }

}
