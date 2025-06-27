import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-media-gallery',
  templateUrl: './media-gallery.component.html',
  styleUrls: ['./media-gallery.component.scss']
})
export class MediaGalleryComponent implements OnInit {
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

  showModal() {
    document.getElementById('callModal').click();
  }

}
