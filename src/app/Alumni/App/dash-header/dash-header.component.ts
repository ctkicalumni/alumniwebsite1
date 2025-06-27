import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/helpers/user-info.service';

@Component({
  selector: 'app-dash-header',
  templateUrl: './dash-header.component.html',
  styleUrls: ['./dash-header.component.scss']
})
export class DashHeaderComponent implements OnInit, OnDestroy {

  userInfo: any;
  imageSrc :string = 'assets/images/user_default.png';

  currentUrl: string = '';

  constructor(
    private router: Router,
    private user: UserInfoService,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#EAEAEA';

    this.currentUrl = this.router.url;

    this.userInfo = this.user.info();

    if(this.user.info()['profile'] != null) {
      this.imageSrc = this.user.info()['profile'];
    }
  }
  ngOnDestroy(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#FFF';
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/alumni']);
  }

  sideMenu() {
    let ele : HTMLElement  = document.getElementById('sideNavbar');
    let bars : HTMLElement = document.getElementById('bars');
    let bars2 : HTMLElement = document.getElementById('bars2');
    let eleStyle = window.getComputedStyle(ele);
    let eleMarginLeft = eleStyle.marginLeft;
    let breadc : HTMLElement = document.querySelector('.breadcrumb-wrapper');
    let section : HTMLElement = document.querySelector('.section');
    let vw = window.innerWidth;

    if (eleMarginLeft == '-200px') {
      ele.style.setProperty('margin-left','0px');
      ele.style.setProperty('box-shadow','0 0px 5px #ccc');
      bars.classList.add('arrow');
      bars2.classList.add('arrow');
      eleMarginLeft = '0px';
    } else {
      ele.style.setProperty('margin-left','-200px');
      ele.style.setProperty('box-shadow','0 0px 0px #ccc');
      bars.classList.remove('arrow');
      bars2.classList.remove('arrow');
      eleMarginLeft = '-200px';
    }
    if (vw > 575) {
      if (eleMarginLeft == '0px') {
        breadc.style.setProperty('width','calc(100% - 200px)');
        breadc.style.setProperty('left','200px');
        section.style.setProperty('width','calc(100% - 200px)');
        section.style.setProperty('margin-left','200px');
      } else {
        breadc.style.setProperty('width','100%');
        breadc.style.setProperty('left','0');
        section.style.setProperty('width','100%');
        section.style.setProperty('margin-left','0');
      }
    }
  }

  menuItems = [{
    url : '/alumni/dashboard',
    icon : 'fas fa-tachometer-alt',
    text : 'Dashboard'
  }, {
    url : '/alumni/batch-mate',
    icon : 'fas fa-user-friends',
    text : 'Search buddy'
  }, {
    url : '/alumni/share-photo',
    icon : 'far fa-images',
    text : 'Share Photos'
  }, {
    url : '/alumni/class-photo',
    icon : 'far fa-image',
    text : 'Class Photos'
  }, {
    url : '/alumni/voting',
    icon : 'fas fa-vote-yea',
    text : 'Election'
  }, {
    url : '/alumni/news',
    icon : 'far fa-newspaper',
    text : 'News'
  }, {
    url : '/alumni/events',
    icon : 'fas fa-calendar-day',
    text : 'Events'
  }, {
    url : '/alumni/gallery',
    icon : 'fas fa-images',
    text : 'Gallery'
  }, {
    url : '/alumni/media-gallery',
    icon : 'fas fa-images',
    text : 'Media Gallery'
  }, {
    url : '/alumni/wall-of-fame',
    icon : 'fas fa-trophy',
    text : 'Wall of Fame'
  }, {
    url : '/alumni/suggestion',
    icon : 'fas fa-comment-alt',
    text : 'Suggestions'
  }, {
    url : '/contact-us',
    icon : 'fas fa-phone-square-alt',
    text : 'Contact Us'
  }]

}
