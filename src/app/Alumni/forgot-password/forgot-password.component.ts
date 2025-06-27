import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import Validation from 'src/app/helpers/validation';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  fpForm: FormGroup;
  notification: any;
  viewOtp: any;
  isSubmitted: boolean = false;
  isLoadershow:boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.auth.Athunticate()) {
      this.router.navigate(['/alumni/dashboard']);
    } else {
      this.router.navigate(['/alumni/forgot-password']);
    }

    this.fpForm = new FormGroup({
      mobile_no: new FormControl(null, Validators.required),
      new_password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(18)]),
      confirm_new_password: new FormControl(null, Validators.required),
      otp: new FormControl(null, Validators.required)
    }, Validation.match('new_password','confirm_new_password')
    );
  }

  get f() { return this.fpForm.controls }

  sendOtp() {
    if (this.fpForm.controls['mobile_no'].invalid || this.fpForm.controls['new_password'].invalid || this.fpForm.controls['confirm_new_password'].invalid) {
      this.isSubmitted = true;
      return;
    }

    this.isLoadershow = true;
    this.auth.sendOtp(2,this.fpForm.controls['mobile_no'].value).subscribe((response) => {
      if (response['status'] == 1) {
        this.viewOtp = 'view';
        this.notification = { 'class': 'alert-success show', 'message': response['message'] };
      } else {
        this.notification = { 'class': 'alert-danger show', 'message': response['message'] };
      }
      this.isLoadershow = false;
    })
  }

  onSubmit() {
    if (this.fpForm.invalid) {
      this.isSubmitted = true;
      return;
    }
    // console.log(this.fpForm.value);
    this.isLoadershow = true;
    this.auth.forgotPassword(this.fpForm.value).subscribe((response) => {
      if (response['status'] == 1) {
        this.notification = { 'class': 'alert-success show', 'message': response['message'] };
        this.fpForm.reset();
        this.viewOtp = false;
      } else {
        this.notification = { 'class': 'alert-danger show', 'message': response['message'] };
      }
      this.isSubmitted = false;
      this.isLoadershow = false;
    });
  }

}
