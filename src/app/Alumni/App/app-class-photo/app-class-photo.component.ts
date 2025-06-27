import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-app-class-photo',
  templateUrl: './app-class-photo.component.html',
  styleUrls: ['./app-class-photo.component.scss']
})
export class AppClassPhotoComponent implements OnInit {
  classPhotots:any = [];
  imgPath: any;

  filterForm: FormGroup;
  isLoading: boolean = false;

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
    this.isLoading = true;
    this.getAPI.getClassPhotot({searchBy: this.filterForm.controls['searchBy'].value, search: this.filterForm.controls['search'].value}).subscribe(res=>{
      this.classPhotots = res;
      this.isLoading = false;
    });
  }

  viewImage(imagePath): void {
    this.imgPath = imagePath
  }

  showModal() {
    document.getElementById('callModal').click();
  }

}
