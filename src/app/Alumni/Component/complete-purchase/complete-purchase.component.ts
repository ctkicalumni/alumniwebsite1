import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumniService } from 'src/app/Services/alumni.service';

@Component({
  selector: 'app-complete-purchase',
  templateUrl: './complete-purchase.component.html',
  styleUrls: ['./complete-purchase.component.scss']
})
export class CompletePurchaseComponent implements OnInit {

  public order_id: string;
  public order_info: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private alumniApi: AlumniService
  ) { }

  ngOnInit(): void {
    this.order_id = this.activeRoute.snapshot.paramMap.get('id');

    this.alumniApi.purchaseDetails('purchase-detail',this.order_id).subscribe((result) => {
      this.order_info = result;
      // console.log(result);
    })
  }

}
