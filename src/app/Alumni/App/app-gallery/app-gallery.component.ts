import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-app-gallery',
  templateUrl: './app-gallery.component.html',
  styleUrls: ['./app-gallery.component.scss']
})
export class AppGalleryComponent implements OnInit {
  album_id: string;
  galleries:any = [];
  imgPath: any;

  filterForm: FormGroup;

  constructor(
    private getAPI: ApiServiceService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.filterFormInti();

    this.album_id = this.route.snapshot.paramMap.get('album_id');

    this.getGallery();
  }

  filterFormInti() {
    this.filterForm = new FormGroup({
      searchBy: new FormControl('all'),
      search: new FormControl('')
    });
  }

  getGallery() {
    this.getAPI.getGallery({album_id:this.album_id, searchBy: this.filterForm.controls['searchBy'].value, search: this.filterForm.controls['search'].value}).subscribe(res=>{
      this.galleries = res;
    });
  }

  viewImage(imagePath): void {
    this.imgPath = imagePath
  }

  showModal() {
    document.getElementById('callModal').click();
  }

}
