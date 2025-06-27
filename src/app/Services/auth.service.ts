import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl:string;
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
      this.baseUrl = environment.apiHost;
  }

  Athunticate() {
    let token = localStorage.getItem('access_token');
    if(token !== null) {
      return true;
    } else {
      return false;
    }
  }

  login(credentials: any) {
    return this.http.post(this.baseUrl + 'login', credentials);
  }
  registration(data: any) {
    return this.http.post(this.baseUrl + 'registration', data);
  }
  forgotPassword(data: any) {
    return this.http.post(this.baseUrl + 'forgot-password', data);
  }

  // sendOtp(type:number, email:string, phone_code: string, mobile_no:string) {
  //   return this.http.post(this.baseUrl+'send-otp',{'type': type, 'email': email, 'phone_code': phone_code, 'mobile_no': mobile_no});
  // }
  sendOtp(type:number, username:string, phone_code = '', mobile_no = '') {
    return this.http.post(this.baseUrl+'send-otp',{'type': type, 'username': username, 'phone_code' : phone_code, 'mobile_no' : mobile_no});
  }
}
