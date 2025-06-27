import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { ApiServiceService } from 'src/app/Services/api-service.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  schoolInfo: any;
  isView: any;
  constructor(
    private getAPI: ApiServiceService,
    private auth: AuthService
  ) {
    this.getAPI.getSchoolInfo().subscribe(res=>{
      this.schoolInfo = res;
    })

    if(this.auth.Athunticate()) {
      this.isView = true;
    } else {
      this.isView = false;
    }
  }

  ngOnInit(): void {
  }

}
