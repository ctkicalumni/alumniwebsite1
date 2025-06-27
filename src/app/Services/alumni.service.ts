import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumniService {

  baseUrl:string;

  constructor(
    private http: HttpClient,
    public router: Router
  ) {
    this.baseUrl = environment.apiHost;
  }

  // getMembership(dob:string) {
  //   return this.http.post(this.baseUrl+'get-membership', {'dob': dob});
  // }
  access_token() {
    return localStorage.getItem('access_token');
  }

  alumniAPI(data: any) {
    return this.http.post(this.baseUrl+'alumni', {'type':data, 'token':this.access_token()});
  }

  getData(type: string) {
    return this.http.post(this.baseUrl+'alumni',{'type' : type, 'token':this.access_token()});
  }
  sendData(formData: any) {
    return this.http.post(this.baseUrl+'alumni',formData);
    // console.log(formData);
  }

  purchaseMembership(id:number) {
    return this.http.post(this.baseUrl+'get-membership',{'id':id, 'token':this.access_token()});
  }

  purchaseDetails(type: string , order_id: string) {
    return this.http.post(this.baseUrl+'alumni',{'type' : type, 'token':this.access_token(), 'order_id': order_id});
  }

  changePassword(type: string , current_password: string, new_password: string) {
    return this.http.post(this.baseUrl+'alumni',{'type' : type, 'token':this.access_token(), 'current_password' : current_password, 'new_password':new_password});
  }

  submitSuggestion(type: string , suggestion: string) {
    return this.http.post(this.baseUrl+'alumni',{'type' : type, 'token':this.access_token(), 'suggestion' : suggestion});
  }

  electedRequest(type: string , election_id: string ,post_id: string) {
    return this.http.post(this.baseUrl+'alumni',{'type' : type, 'token':this.access_token(), 'election_id' : election_id, 'post_id' : post_id});
  }

  sendVote(type: string, election_id: string, post_id: string, candidate_id:string) {
    return this.http.post(this.baseUrl+'alumni',{'type' : type, 'token':this.access_token(), 'election_id' : election_id, 'post_id' : post_id, 'candidate_id' : candidate_id});
  }

  addGroupPhoto(type: string, year: string, clas: string, image: string, description: string,) {
    return this.http.post(this.baseUrl+'alumni', {'type' : type, 'token':this.access_token(), 'year':year, 'class':clas, 'image':image, 'description':description});
  }

  getState(countryId: number) {
    return this.http.post(this.baseUrl+'alumni', {'type' : 'states', 'token':this.access_token(), country_id: countryId });
  }
  getCity(stateId: number) {
    return this.http.post(this.baseUrl+'alumni', {'type' : 'cities', 'token':this.access_token(), state_id: stateId });
  }

  getBuddyData(keys,vlaues,ids) {
    return this.http.post(this.baseUrl+'alumni',{'type' : 'get-batch-mates', 'token':this.access_token(), keys:keys, values:vlaues, ids:ids});
  }
}
