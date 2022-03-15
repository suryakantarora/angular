import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: any;
  password: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  validate() {
    console.log('Username: ' + this.userName);
    console.log('Password: ' + this.password);
    if(!this.userName){
      alert('Invalid username');
    } else if (this.userName.length < 5 ) {
      alert('Invalid username');
    } else if(!this.password){
      alert('Invalid password');
    } else if (this.password.length < 5 ) {
      alert('Invalid password');
    } else {
      localStorage.setItem('username', this.userName);
      this.router.navigate(['/home']);
    }
  }
}
