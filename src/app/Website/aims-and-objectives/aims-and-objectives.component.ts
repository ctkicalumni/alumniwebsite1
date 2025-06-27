import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aims-and-objectives',
  templateUrl: './aims-and-objectives.component.html',
  styleUrls: ['./aims-and-objectives.component.scss']
})
export class AimsAndObjectivesComponent implements OnInit {

  mainTitle:string
  pageTitle:string

  constructor() { }

  ngOnInit(): void {
    this.mainTitle = 'Home'
    this.pageTitle = 'Aims and Objectives'
  }

}
