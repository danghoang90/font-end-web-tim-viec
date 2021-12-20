import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-published-recruitment',
  templateUrl: './published-recruitment.component.html',
  styleUrls: ['./published-recruitment.component.css']
})
export class PublishedRecruitmentComponent implements OnInit {
  employer = JSON.parse(<string>localStorage.getItem('userLogin'))
  constructor() { }

  ngOnInit(): void {

  }

}
