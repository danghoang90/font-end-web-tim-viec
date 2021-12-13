import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  condition = !localStorage.getItem('userLogin')
  userLogin: any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.userLogin = JSON.parse(<string>localStorage.getItem('userLogin'));
  }
  logout() {
    localStorage.removeItem('userLogin')
    localStorage.removeItem('token')
    this.router.navigate(['login'])
  }
}
