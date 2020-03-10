import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username:string;
  password:string;
  error:string = null;

  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(event) {
    /*this.Auth.getUserDetails(this.username, this.password).subscribe(data => {
      if(data.success) {
          this.router.navigate(['home'])
          this.Auth.setLoggedIn(true)
      } else {
        window.alert(data.message);
      }
    });*/

    //offline functionality
    var data = this.Auth.getUserDetailsOffline(this.username, this.password);
    if(data.success) {
      this.router.navigate(['home'])
      //alert('Login erfolgreich')
      this.Auth.setLoggedIn(true)
    } else {
      this.error = data.message;
    }
  }
}
