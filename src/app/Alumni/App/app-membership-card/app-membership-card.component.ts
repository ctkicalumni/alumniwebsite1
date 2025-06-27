import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UserInfoService } from 'src/app/helpers/user-info.service';
import { AlumniService } from 'src/app/Services/alumni.service';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-app-membership-card',
  templateUrl: './app-membership-card.component.html',
  styleUrls: ['./app-membership-card.component.scss']
})
export class AppMembershipCardComponent implements OnInit {

  @ViewChild('screen') screen: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;


  userinfo:any;
  info:any;
  currentDate: Date;

  constructor(
    private user: UserInfoService,
    private alumniSerivce:AlumniService
  ) { }

  ngOnInit(): void {
    this.info = this.user.info();

    this.alumniSerivce.getData('user-profile').subscribe((response) => {
      this.userinfo = response;
    });

    this.currentDate = new Date();
    this.currentDate.setDate( this.currentDate.getDate() + 2 )
  }

  downloadImage(){
    html2canvas(this.screen.nativeElement).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = this.info.first_name+'-id-card.png';
      this.downloadLink.nativeElement.click();
    });
  }

}
