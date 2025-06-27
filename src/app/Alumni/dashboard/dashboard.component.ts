import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/Services/api-service.service';
import { AlumniService } from 'src/app/Services/alumni.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NotifierService } from 'angular-notifier';
import { UserInfoService } from 'src/app/helpers/user-info.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  memberships: any;
  membershipLen:boolean=false;
  access_token: string;
  news: any;
  events: any;
  iselection= false;
  elections: any;
  posts: any;
  isCandidate: boolean = false;
  currentDate= new Date();
  membershipFee: number;

  info: any;

  profileFields1: any = ['first_name','gender','dob','email','phone_code','fathers_mobile_no','class_name','adm_date'];
  profileFields2: any = ['present_address_1','present_address_2','present_country','present_state','present_city','present_postal_code'];
  profileFields3: any = ['profession','organizaiton','designation'];
  totalPercentage: number;

  isNRI: boolean = false;
  isModalShown: boolean = false;

  constructor(
    private getAPI: ApiServiceService,
    private alumniAPI: AlumniService,
    private router: Router,
    private notifire: NotifierService,
    private user: UserInfoService
  ) {
  }

  ngOnInit(): void {

    // this.modalWork();
    this.profileProgress();

    this.info = this.user.info();

    this.alumniAPI.alumniAPI('get-membership').subscribe((response) => {
      this.memberships = response;
      if(this.memberships.length > 0) {
        this.membershipLen = true;
      }
    });

    this.alumniAPI.getData('get-elections').subscribe((response) => {
      if(response['status'] == 1) {
        this.iselection = true;
        this.elections = response['elections'];
        this.posts = response['posts'];
      } else {
        this.iselection = false;
      }
    })

    this.getAPI.getNews('3').subscribe(res=>{
      this.news = res;
    })
    this.getAPI.getEvent('3').subscribe(res=>{
      this.events = res;
    })

  }

  profileProgress() {
    let total1 = this.profileFields1.length;
    let total2 = this.profileFields2.length;
    let total3 = this.profileFields3.length;
    let complete1 = 0;
    let complete2 = 0;
    let complete3 = 0;
    this.alumniAPI.getData('user-profile').subscribe((response) => {

      for(let key in response[0]) {
        if(this.profileFields1.includes(key)) {
          if(response[0][key] != null && response[0][key] != ''&& response[0][key] != 0) {
            complete1++;
          }
        }
        if(this.profileFields2.includes(key)) {
          if(response[0][key] != null && response[0][key] != ''&& response[0][key] != 0) {
            complete2++;
          }
        }
        if(this.profileFields3.includes(key)) {
          if(response[0][key] != null && response[0][key] != ''&& response[0][key] != 0) {
            complete3++;
          }
        }
      }
      let per1 = Math.round((complete1/total1*100)/2);
      let per2 = Math.round((complete2/total2*100)/4);
      let per3 = Math.round((complete3/total3*100)/4);
      this.totalPercentage = per1+per2+per3;

      if(this.totalPercentage < 100 && localStorage.getItem('modalShow') === null) {
        this.showModal();
        localStorage.setItem('modalShow','1');
      }


      this.membershipFee = response[0].subscription_fee;
      if(response[0].phone_code != '91' && response[0].phone_code != '+91' && response[0].phone_code != null && response[0].phone_code != 'null' && response[0].phone_code != '') {
        this.isNRI = true;
      }
      // console.log(response[0].phone_code);


    });
  }

  purchaseMembership(id) {
    this.alumniAPI.purchaseMembership(id).subscribe((response) => {
      if(response['status'] == 1) {
        const my_form: any = document.createElement('form');
        my_form.name = 'paytm_form';
        my_form.method = 'post';
        my_form.action = environment.apiHost+'checkout-membership';

        let my_tb_1: any = document.createElement('input');
        my_tb_1.type = 'hidden';
        my_tb_1.name = 'order_id';
        my_tb_1.value = response['order_id'];
        my_form.appendChild(my_tb_1);

        let my_tb_2: any = document.createElement('input');
        my_tb_2.type = 'hidden';
        my_tb_2.name = 'customer_id';
        my_tb_2.value = response['customer_id'];
        my_form.appendChild(my_tb_2);

        let my_tb_3: any = document.createElement('input');
        my_tb_3.type = 'hidden';
        my_tb_3.name = 'subscription_id';
        my_tb_3.value = response['subscription_id'];
        my_form.appendChild(my_tb_3);

        let my_tb_4: any = document.createElement('input');
        my_tb_4.type = 'hidden';
        my_tb_4.name = 'amount';
        my_tb_4.value = response['amount'];
        my_form.appendChild(my_tb_4);

        let my_tb_5: any = document.createElement('input');
        my_tb_5.type = 'hidden';
        my_tb_5.name = 'school_id';
        my_tb_5.value = environment.schoolId;
        my_form.appendChild(my_tb_5);

        document.body.appendChild(my_form);
        my_form.submit();

      } else {
        console.log(response);
      }
    });
  }

  getElected(election_id, post_id) {
    if(confirm('Do you want to elected !') == false) {
      return;
    }

    this.alumniAPI.electedRequest('get-elected', election_id, post_id).subscribe((response) => {
      if(response['status'] == 1) {
        this.isCandidate = true;
        this.notifire.notify('success',response['message']);
      } else {
        this.notifire.notify('error',response['message']);
      }
    })
  }

  convertDays(noOfDays) {
    let year = Math.floor(noOfDays / 365);
    let months = Math.floor(noOfDays % 365 / 30);
    let days = Math.floor(noOfDays % 365 % 30);

    return year+':'+months+':'+days;
  }

  showModal() {
    this.isModalShown = true;
  }
  hideModal() {
    this.isModalShown = false;
  }
}
