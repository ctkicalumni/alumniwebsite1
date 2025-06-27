import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  mainTitle = "Home";
  pageTitle = "Contact Us";
  schoolInfo: any;
  constructor(private getAPI:ApiServiceService) { }

  ngOnInit(): void {
    this.getAPI.getSchoolInfo().subscribe(res=>{
      this.schoolInfo = res;
    })
  }

}
