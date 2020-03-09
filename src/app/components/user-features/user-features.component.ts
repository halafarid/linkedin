import { Component, OnInit } from '@angular/core';

import { faBookOpen } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-user-features',
  templateUrl: './user-features.component.html',
  styleUrls: ['./user-features.component.scss']
})
export class UserFeaturesComponent implements OnInit {
  panelOpenState = false;
  faBookOpen=faBookOpen;

  constructor() { }

  ngOnInit() {
  }
 

}
