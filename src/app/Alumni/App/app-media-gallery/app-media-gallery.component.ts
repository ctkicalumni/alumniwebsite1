import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-app-media-gallery',
  templateUrl: './app-media-gallery.component.html',
  styleUrls: ['./app-media-gallery.component.scss']
})
export class AppMediaGalleryComponent implements OnInit {

  mediaGalleries:any = [];
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
    this.getAPI.getMediaGallery({searchBy: this.filterForm.controls['searchBy'].value, search: this.filterForm.controls['search'].value}).subscribe(res=>{
      this.mediaGalleries = res;
    });
  }

  viewImage(imagePath): void {
    this.imgPath = imagePath
  }

  showModal() {
    document.getElementById('callModal').click();
  }

}
