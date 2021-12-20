import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-master-admin',
  templateUrl: './master-admin.component.html',
  styleUrls: [
    './master-admin.component.css',
    '/master-admin.component.css'
  ],
  encapsulation : ViewEncapsulation.None,
})
export class MasterAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
