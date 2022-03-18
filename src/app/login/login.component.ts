import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: any;
  password: any;
  constructor(
    private router: Router,
    public rest: RestService 
  ) { }

  ngOnInit(): void {
  }
  validateForm() {
    console.log('Username: ' + this.userName);
    console.log('Password: ' + this.password);
    if(!this.userName){
      this.rest.errorAlert('Alert!', 'Invalid username');
    } else if (this.userName.length < 5 ) {
      this.rest.errorAlert('Alert!', 'Invalid username');
    } else if(!this.password){
      this.rest.showAlert('Alert!', 'Invalid password');
    } else if (this.password.length < 5 ) {
      this.rest.showAlert('Alert!', 'Invalid password');
    } else {
      this.rest.successAlert('Success!', 'Login Success');
      localStorage.setItem('username', this.userName);
      localStorage.setItem('SESSIONID', this.userName);
      this.router.navigate(['/home']);
    }
  }
}
