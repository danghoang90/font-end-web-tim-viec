import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  condition = !localStorage.getItem('userLogin')
  userLogin: any;
  constructor(private router:Router,
              private authService: AuthService ) { }

  ngOnInit(): void {
    this.userLogin = JSON.parse(<string>localStorage.getItem('userLogin'));
  }
  logout() {
    this.authService.logout().subscribe(res => {})
    localStorage.removeItem('userLogin')
    localStorage.removeItem('token')
    this.router.navigate(['login'])
  }
}
