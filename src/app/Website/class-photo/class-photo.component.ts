import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-class-photo',
  templateUrl: './class-photo.component.html',
  styleUrls: ['./class-photo.component.scss']
})
export class ClassPhotoComponent implements OnInit {
  classPhotos:any = [];
  imgPath: any;

  filterForm: FormGroup;

  constructor(
    private getAPI: ApiServiceService,
  ) { }

  ngOnInit(): void {
    this.filterFormInti();
    this.getGallery();
  }

  filterFormInti() {
    this.filterForm = new FormGroup({
      searchBy: new FormControl('all'),
      search: new FormControl('')
    });
  }

  getGallery() {
    this.getAPI.getClassPhotot({searchBy: this.filterForm.controls['searchBy'].value, search: this.filterForm.controls['search'].value}).subscribe(res=>{
      this.classPhotos = res;
    });
  }

  showModal() {
    document.getElementById('callModal').click();
  }

}
