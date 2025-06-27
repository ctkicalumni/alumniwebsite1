import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-app-news',
  templateUrl: './app-news.component.html',
  styleUrls: ['./app-news.component.scss']
})
export class AppNewsComponent implements OnInit {

  news: any

  constructor(private getAPI:ApiServiceService) { }

  ngOnInit(): void {
    this.getAPI.getNews().subscribe(res=>{
      this.news = res;
    })
  }

}
