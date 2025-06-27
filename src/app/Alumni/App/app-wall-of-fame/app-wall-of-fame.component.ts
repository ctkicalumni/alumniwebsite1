import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-app-wall-of-fame',
  templateUrl: './app-wall-of-fame.component.html',
  styleUrls: ['./app-wall-of-fame.component.scss']
})
export class AppWallOfFameComponent implements OnInit {

  fames: any
  constructor(private getAPI: ApiServiceService) {
    this.getAPI.getWallOfFame().subscribe(res => {
      this.fames = res;
    })
  }

  ngOnInit(): void {
  }

}
