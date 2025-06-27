import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-wall-of-fame',
  templateUrl: './wall-of-fame.component.html',
  styleUrls: ['./wall-of-fame.component.scss']
})
export class WallOfFameComponent implements OnInit {

  mainTitle = "Home";
  pageTitle = "Wall of Fame"
  fames: any
  constructor(private getAPI: ApiServiceService) {
    this.getAPI.getWallOfFame().subscribe(res => {
      this.fames = res;
    })
  }

  ngOnInit(): void {
  }

}
