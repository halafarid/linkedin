import { User } from './../../../Models/User';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-network-card',
  templateUrl: './network-card.component.html',
  styleUrls: ['./network-card.component.scss']
})
export class NetworkCardComponent implements OnInit {
  @Input() user:User;

  constructor() { }

  ngOnInit() {
    // console.log(this.user)
  }

}
