import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { AlumniService } from 'src/app/Services/alumni.service';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-app-group-photo',
  templateUrl: './app-group-photo.component.html',
  styleUrls: ['./app-group-photo.component.scss']
})
export class AppGroupPhotoComponent implements OnInit {

  years: any;
  classes: any;
  groupPhotoForm: FormGroup;
  isSubmitted: boolean = false;
  imageMime: string="";
  base64string: any=[];

  grouptPhotos: any;

  constructor(
    private alumniService: AlumniService,
    private getApi: ApiServiceService,
    private notifire: NotifierService
  ) { }

  ngOnInit(): void {
    this.getApi.getYears().subscribe((res) => {
      this.years = res;
    });
    this.getApi.getClasses().subscribe((res) => {
      this.classes = res;
    });

    this.groupPhotoFormInti();

    this.alumniService.getData('get-user-group-photo').subscribe((response) => {
      // console.log(response);
      this.grouptPhotos = response;
    })
  }

  groupPhotoFormInti() {
    this.groupPhotoForm = new FormGroup({
      year: new FormControl('',Validators.required),
      class: new FormControl('',Validators.required),
      image: new FormControl('',Validators.required),
      description: new FormControl('')
    });
  }

  onFileSelect(evt: any) {
    const file = evt.target.files[0];
    this.imageMime = file.type;
    let fileSize = file.size;

    if(fileSize > 1024*1024) {
      this.notifire.notify('warning','Select less than 1 MB image');
      return;
    }

    if (file) {
      const reader = new FileReader();

      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {
    this.groupPhotoForm.controls['image'].setValue('data:'+this.imageMime+';base64,'+btoa(e.target.result));
  }

  get form() { return this.groupPhotoForm.controls }

  onSubmit() {
    if(this.groupPhotoForm.invalid) {
      this.isSubmitted = true;
      return;
    }
    this.alumniService.addGroupPhoto('add-group-photo',this.groupPhotoForm.controls['year'].value,this.groupPhotoForm.controls['class'].value,this.groupPhotoForm.controls['image'].value,this.groupPhotoForm.controls['description'].value).subscribe((response) => {
      if(response['status'] == 1) {
        this.notifire.notify('success',response['message']);
      } else {
        this.notifire.notify('error',response['message']);
      }
      // this.groupPhotoForm.reset();
      this.isSubmitted = false;
      this.groupPhotoFormInti();
    })
  }

}
