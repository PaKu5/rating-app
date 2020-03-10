import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface myData {
  success: boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = false;

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  getUserDetails(username, password) {
    return this.http.post<myData>('/api/auth.php', {
      username,
      password
    })
  }

  getUserDetailsOffline(username, password) {
    const response: myData = {
      success: false,
      message: 'foo'
    }
    if(username == 'admin' && password == 'admin') {
      response.success = true;
      response.message = 'login successful';
    } else {
      response.success = false;
      response.message = 'wrong credentials';
    }
    return response;
  }
}