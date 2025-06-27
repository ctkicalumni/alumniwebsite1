import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sliders: any
  news: any
  events: any
  galleries: any
  birthdays: any
  constructor(private getAPI:ApiServiceService) {
    this.getAPI.getSlider().subscribe(res=>{
      this.sliders = res;
    })
    this.getAPI.getNews('10').subscribe(res=>{
      this.news = res;
    })
    this.getAPI.getEvent('10').subscribe(res=>{
      this.events = res;
    })
    this.getAPI.getGallery({limit:6}).subscribe(res=>{
      this.galleries = res;
    })
    this.getAPI.getBirthdays().subscribe(res=>{
      this.birthdays = res;
    })
  }

  ngOnInit(): void {
  }

}
