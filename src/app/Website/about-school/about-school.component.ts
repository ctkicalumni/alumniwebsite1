import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-school',
  templateUrl: './about-school.component.html',
  styleUrls: ['./about-school.component.scss']
})
export class AboutSchoolComponent implements OnInit {

  mainTitle: string;
  pageTitle:string;
  constructor() { }

  ngOnInit(): void {
    this.mainTitle = 'Home';
    this.pageTitle = "About School";
  }

}
