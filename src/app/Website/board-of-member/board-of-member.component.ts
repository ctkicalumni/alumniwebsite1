import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-board-of-member',
  templateUrl: './board-of-member.component.html',
  styleUrls: ['./board-of-member.component.scss']
})
export class BoardOfMemberComponent implements OnInit {

  mainTitle = 'Home';
  pageTitle = 'Board of Member';
  boardOfMebers: any
  constructor(private getAPI: ApiServiceService) {
    this.getAPI.getBoradOfMember().subscribe(res=>{
      this.boardOfMebers = res;
    });
  }

  ngOnInit(): void {
  }

}
