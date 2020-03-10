import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service'; 
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm:FormGroup;
  returnUrl:string;
  error:string = null;

  constructor(
    private formBuilder: FormBuilder, 
    private auth: AuthService,
    private route: ActivatedRoute, 
    private router: Router) { 

      if (this.auth.currentUserValue) {
        this.router.navigate(['/home']);
      }
    }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin';
  }

  get f() { return this.loginForm.controls; }

  login() {
    console.log('foo');
    if(this.loginForm.invalid) {
      return;
    }
    
    this.auth.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
          data => {
              this.router.navigate([this.returnUrl]);
          },
          error => {
              this.error = error;
          });
  }
}
