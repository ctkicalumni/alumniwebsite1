import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInfoService } from '../helpers/user-info.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MemberGuard implements CanActivate {

  constructor(
    public user: UserInfoService,
    public router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.user.info()['left_days'] <= 0 && this.user.info()['left_days'] != 'lifetime') {
        this.router.navigate(['/alumni/purchase-membership']);
      }
    return true;
  }

}
