import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/Services/api-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.scss']
})
export class EnquiryFormComponent implements OnInit {

  enquiry_form: FormGroup;
  isSubmitted:boolean = false;
  notification: any;
  constructor(private getAPI:ApiServiceService) { }

  ngOnInit(): void {
    this.enquiry_form = new FormGroup({
      name: new FormControl('',Validators.required),
      mobile_no: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      city: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
      school_id: new FormControl(environment.schoolId)
    });
  }

  get f() { return this.enquiry_form.controls }

  submitQuery() {
    if(this.enquiry_form.invalid) {
      this.isSubmitted = true;
      return;
    }
    this.getAPI.sendEnquery(this.enquiry_form.value).subscribe((response)=>{
      // console.log(response);
      if(response['status'] == 1) {
        this.notification = {'class':'alert-success show', 'message': response['message']};
      } else {
        this.notification = {'class':'alert-danger show', 'message': response['message']};
      }
      this.enquiry_form.reset();
      this.isSubmitted = false;
    })
  }

}
