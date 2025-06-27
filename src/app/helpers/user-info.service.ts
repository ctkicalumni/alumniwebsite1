import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor() { }

  info() {
    return jwt_decode(localStorage.getItem('access_token'));
  }
}
