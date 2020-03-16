import { User } from './../../../Models/User';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-friends-card',
  templateUrl: './friends-card.component.html',
  styleUrls: ['./friends-card.component.scss']
})
export class FriendsCardComponent implements OnInit {
@Input()friend:User;
  constructor() { }

  ngOnInit() {
  }

}