import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-former-principal',
  templateUrl: './former-principal.component.html',
  styleUrls: ['./former-principal.component.scss']
})
export class FormerPrincipalComponent implements OnInit {

  mainTitle = 'Home';
  pageTitle = 'Former Principals';
  formerPrincipals: any
  constructor(private getAPI: ApiServiceService) {
    this.getAPI.getFormerPrincipal().subscribe(res=>{
      this.formerPrincipals = res;
    });
  }

  ngOnInit(): void {
  }

}
