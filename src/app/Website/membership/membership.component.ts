import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {

  mainTitle = "Home";
  pageTitle = 'Membership';

  constructor() { }

  ngOnInit(): void {
  }

}
