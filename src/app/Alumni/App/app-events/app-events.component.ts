import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-app-events',
  templateUrl: './app-events.component.html',
  styleUrls: ['./app-events.component.scss']
})
export class AppEventsComponent implements OnInit {

  events: any
  constructor(private getAPI:ApiServiceService) { }

  ngOnInit(): void {
    this.getAPI.getEvent().subscribe(res=>{
      this.events = res;
    })
  }

}
