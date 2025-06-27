import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted: boolean = false;
  isLoadershow:boolean = false;

  notification: any;
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.auth.Athunticate()) {
      this.router.navigate(['/alumni/dashboard']);
    } else {
      this.router.navigate(['/alumni']);
    }

    this.formInti();
  }

  formInti() {
    this.loginForm = new FormGroup({
      mobile_no: new FormControl(null,[
        Validators.required
      ]),
      password: new FormControl(null,[
        Validators.required
      ])
    });
  }

  get f() { return this.loginForm.controls }


  onSubmit() {
    if(this.loginForm.invalid) {
      this.isSubmitted = true;
      return;
    }

    this.isLoadershow = true;
    this.auth.login(this.loginForm.value).subscribe((response) => {
      if(response['status'] == 1) {
        localStorage.setItem('access_token',response['access_token']);
        localStorage.setItem('user_id',response['data']['user_id']);
        this.notification = {'class':'alert-success show', 'message': response['message']};
        this.router.navigate(['/alumni/dashboard']);
        this.formInti();
      } else {
        this.notification = {'class':'alert-danger show', 'message': response['message']};
      }
      this.isSubmitted = false;
      this.isLoadershow = false;
    })
  }

}
