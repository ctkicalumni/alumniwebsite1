import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { AlumniService } from 'src/app/Services/alumni.service';

@Component({
  selector: 'app-app-suggestions',
  templateUrl: './app-suggestions.component.html',
  styleUrls: ['./app-suggestions.component.scss']
})
export class AppSuggestionsComponent implements OnInit {

  suggestionForm: FormGroup;
  submitted = false;
  notification: any;

  constructor(
    private alumniService: AlumniService,
    private notifire: NotifierService
  ) { }

  ngOnInit(): void {
    this.suggestionForm = new FormGroup({
      suggestionInput: new FormControl('',[Validators.required, Validators.maxLength(500)])
    });
  }

  get suggestionInput(): FormControl{
    return this.suggestionForm.get('suggestionInput') as FormControl;
  }


  submitsuggestion() {

    if(this.suggestionForm.invalid) {
      this.submitted = true;
      return;
    }

    this.alumniService.submitSuggestion('submit-suggestion',this.suggestionForm.controls['suggestionInput'].value).subscribe((response) => {
      if(response['status'] == 1) {
        // this.notification = {'class':'alert-success show', 'message': response['message']};
        this.notifire.notify('success',response['message']);
      } else {
        this.notifire.notify('error',response['message']);
      }
      this.suggestionForm.reset();
    });
  }

}
