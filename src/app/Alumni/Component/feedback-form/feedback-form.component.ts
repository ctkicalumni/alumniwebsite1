import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlumniService } from 'src/app/Services/alumni.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {
  feedbackForm: FormGroup;
  isSubmitted:boolean=false;

  constructor(
    private alumniService: AlumniService,
    private notifire: NotifierService
  ) { }

  ngOnInit(): void {
    this.feedbackFormInti();
  }

  feedbackFormInti() {
    this.feedbackForm = new FormGroup({
      type: new FormControl('submit-suggestion'),
      token: new FormControl(this.alumniService.access_token()),
      rating: new FormControl('5',Validators.required),
      category: new FormControl('1', Validators.required),
      feedback: new FormControl('',Validators.required)
    });
  }

  get f() { return this.feedbackForm.controls }

  submit() {
    // console.log(this.feedbackForm.value);
    if(this.feedbackForm.invalid) {
      this.isSubmitted = true;
      return;
    }

    this.alumniService.sendData(this.feedbackForm.value).subscribe((response) => {
      // console.log(response);
      if(response['status'] == 1) {
        this.notifire.notify('success',response['message']);
      } else {
        this.notifire.notify('error',response['message']);
      }
    })
    this.selectRating(4);
    this.selectCategory(0);
    this.feedbackFormInti();
    this.isSubmitted = false;
  }

  selectRating(ele) {
    let rating = document.querySelectorAll('.feedback-rating-icon');

    rating.forEach((value) => {
      value.classList.remove('active');
    })

    rating[ele].classList.add('active');
  }

  selectCategory(ele) {
    let category = document.querySelectorAll('.feedback-category-option');

    category.forEach((value) => {
      value.classList.remove('active');
    })

    category[ele].classList.add('active');
  }

}
