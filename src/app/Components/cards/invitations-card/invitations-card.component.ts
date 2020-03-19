import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-invitations-card',
  templateUrl: './invitations-card.component.html',
  styleUrls: ['./invitations-card.component.scss']
})
export class InvitationsCardComponent implements OnInit {

  currentUser = this.userService.currentUser;
  invitations = this.currentUser.invitations;
  invitationsUsers = this.invitations.map(invitation => this.userService.getById(invitation));

  constructor(public userService: UserService) { }

  ngOnInit() {
    console.log(this.invitationsUsers);
  }

}
