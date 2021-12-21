import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import axios from "axios";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  condition = !localStorage.getItem('userLogin')
  userLogin: any;

  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.userLogin = JSON.parse(<string>localStorage.getItem('userLogin'));
  }

  logout() {
    // this.authService.logout().subscribe(res => {
    // })
    let token = localStorage.getItem('token')
    console.log(token)
    axios.get(
      environment.API_URL +'logout',
      {headers: {Authorization: `Bearer ${token}`}
      }).then(res => {
      console.log(res)
    });
    localStorage.removeItem('userLogin')
    localStorage.removeItem('token')
    this.router.navigate(['login'])
  }
}
