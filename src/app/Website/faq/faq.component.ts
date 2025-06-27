import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  mainTitle = "Home";
  pageTitle = "FAQ";
  faqs:any
  constructor(private getAPI: ApiServiceService) { }

  ngOnInit(): void {
    this.getAPI.getFaq().subscribe(res=> {
      this.faqs = res;
    })
  }

}
