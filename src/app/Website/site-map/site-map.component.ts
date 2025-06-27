import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-map',
  templateUrl: './site-map.component.html',
  styleUrls: ['./site-map.component.scss']
})
export class SiteMapComponent implements OnInit {

  mainTitle = "Home";
  pageTitle = "Site Map";

  constructor() { }

  ngOnInit(): void {
  }

}
