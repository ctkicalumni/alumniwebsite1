import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  schoolInfo: any;
  showhidepanel: string = 'side-btns-show';
  showhidearrow: string = 'side-panel-close-show';

  constructor(private getAPI:ApiServiceService) {
    this.getAPI.getSchoolInfo().subscribe(res=>{
      this.schoolInfo = res;
    })
  }

  ngOnInit(): void {
  }

  toggleSidePanel() {
    if(this.showhidepanel == 'side-btns-show') {
      this.showhidepanel = 'side-btns-hide';
      this.showhidearrow = 'side-panel-close-hide';
    } else {
      this.showhidepanel = 'side-btns-show';
      this.showhidearrow = 'side-panel-close-show';
    }
  }

}
