import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-invoice',
  templateUrl: './app-invoice.component.html',
  styleUrls: ['./app-invoice.component.scss']
})
export class AppInvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  console.log(this.data);
  }

  data = {
    order_id:'1_78_2_3'
  };
}
