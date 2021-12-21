import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private toastr: ToastrService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let userLogin = JSON.parse(<string>localStorage.getItem('userLogin'));
    if (!userLogin) {
      this.router.navigate(['login-employer'])
      return false;
    }
    if (userLogin && userLogin.status=="2") {
      this.toastr.warning("Đang chờ xét duyệt !")
      this.router.navigate([''])
      return false;
    }
    return true;
  }

}
