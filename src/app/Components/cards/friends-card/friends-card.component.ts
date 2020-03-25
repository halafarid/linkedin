import { User } from './../../../Models/User';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-friends-card',
  templateUrl: './friends-card.component.html',
  styleUrls: ['./friends-card.component.scss']
})
export class FriendsCardComponent implements OnInit {
  @Input()friend: User;
  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  onChooseProfile(friend) {
    this.userService.getChooseProfile(friend);
  }
}
