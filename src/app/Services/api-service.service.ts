import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  baseUrl:string;
  baseUrl2:string;
  constructor(
    private http: HttpClient,
    public router: Router
  ) {
      this.baseUrl = environment.apiHost+environment.schoolId+'/';
      this.baseUrl2 = environment.apiHost;
  }

  getSlider() {
    return this.http.get(this.baseUrl+'slider');
  }
  getNews(limit='') {
    return this.http.get(this.baseUrl+'news?limit='+limit);
  }
  getEvent(limit='') {
    return this.http.get(this.baseUrl+'event?limit='+limit);
  }
  getGallery(obj) {

    let galleryUrl = this.baseUrl+'gallery'
    if(Object.keys(obj).length !== 0) {
      galleryUrl += '?';
    }

    let i=0;
    for(let key in obj) {
      if(i>0) {
        galleryUrl += '&';
      }
      galleryUrl += key+'='+obj[key];
      i++;
    }

    return this.http.get(galleryUrl);
  }
  getMediaGallery(obj) {

    let galleryUrl = this.baseUrl+'media-gallery'
    if(Object.keys(obj).length !== 0) {
      galleryUrl += '?';
    }

    let i=0;
    for(let key in obj) {
      if(i>0) {
        galleryUrl += '&';
      }
      galleryUrl += key+'='+obj[key];
      i++;
    }

    return this.http.get(galleryUrl);
  }
  getClassPhotot(obj) {

    let galleryUrl = this.baseUrl+'class-photo'
    if(Object.keys(obj).length !== 0) {
      galleryUrl += '?';
    }

    let i=0;
    for(let key in obj) {
      if(i>0) {
        galleryUrl += '&';
      }
      galleryUrl += key+'='+obj[key];
      i++;
    }

    return this.http.get(galleryUrl);
  }
  getBirthdays() {
    return this.http.get(this.baseUrl+'birthdays');
  }
  getSchoolInfo() {
    return this.http.get(this.baseUrl+'school_info');
  }
  getBoradOfMember() {
    return this.http.get(this.baseUrl+'borad_of_member');
  }
  getFormerPrincipal() {
    return this.http.get(this.baseUrl+'former_principal');
  }
  getFaq() {
    return this.http.get(this.baseUrl+'faq');
  }
  getWallOfFame() {
    return this.http.get(this.baseUrl+'wall_of_fame');
  }
  getYears() {
    return this.http.get(this.baseUrl+'starting_year');
  }
  getClasses() {
    return this.http.post(this.baseUrl+'classes',{classes:'set'});
  }

  sendEnquery(data: any) {
    return this.http.post(this.baseUrl2+'submit-enquery', data);
  }

  getAttachmentData(data: any) {
    return this.http.post(`${this.baseUrl2}get-attachment-data`, data);
  }
}
