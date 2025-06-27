import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/Services/api-service.service';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-download-docs',
  templateUrl: './download-docs.component.html',
  styleUrls: ['./download-docs.component.scss']
})
export class DownloadDocsComponent implements OnInit {
  verify_id: string;
  type: string;
  membership: any = [];
  bill: any = [];

  @ViewChild('memberCard') memberCard: ElementRef;
  @ViewChild('invoice') invoice: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;


  constructor(
    private apiService: ApiServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.verify_id = this.route.snapshot.paramMap.get('verify_id');
    this.type = this.route.snapshot.paramMap.get('type');

    this.getData(this.verify_id,this.type);

  }

  getData(verify_id,type) {
    let formData = new FormData();
    formData.append('verify_id',verify_id);
    formData.append('data_type',type);
    this.apiService.getAttachmentData(formData).subscribe((response) => {
        if(response['status'] == 1) {
          this.membership = response['membershipCard'];
          this.bill = response['bill'];
        }

    })
  }

  downloadMembershipCard(){
    html2canvas(this.memberCard.nativeElement).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = 'membership-card.png';
      this.downloadLink.nativeElement.click();
    });
  }

  downloadBill() {
    html2canvas(this.invoice.nativeElement).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = 'invoice.png';
      this.downloadLink.nativeElement.click();
    });
  }

}
