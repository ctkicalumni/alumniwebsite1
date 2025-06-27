import { Component, OnInit } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AlumniApp';
  checkAuth: boolean;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // localStorage.setItem('access_token','');
    // if(this.auth.Athunticate()) {
    //   this.checkAuth = true;
    // } else {
    //   this.checkAuth = false;
    // }
    this.checkAuth = false;
  }
}
