import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  fruits:any
  mainTitle:string
  pageTitle:string

  constructor() {
  }

  ngOnInit(): void {
    this.mainTitle = 'Home'
    this.pageTitle = 'Know Us'
    this.fruits = [
      {
        'firstName':'Prashant',
        'lastName':'Kushwah',
        'Age':25
      },
      {
        'firstName':'Prashant',
        'lastName':'Kushwah',
        'Age':25
      },
      {
        'firstName':'Prashant',
        'lastName':'Kushwah',
        'Age':25
      }
    ]
  }

}
