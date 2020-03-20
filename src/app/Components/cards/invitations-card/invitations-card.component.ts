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
  }
  
  onIgnore(user) {
    const selectUser = this.userService.Users.filter(us => us.id === this.currentUser.id)[0];
    const userId = this.invitations.filter(id => id === user.id)[0];
    const index = this.invitations.indexOf(userId);

    this.currentUser.invitations.splice(index, 1);
    selectUser.invitations.splice(index, 1);
    this.userService.Users[user.id - 1].invitationsSend.splice(index, 1);
    this.invitationsUsers.splice(index, 1);

    console.log(this.currentUser);
    console.log(this.userService.Users);
  }

  onAccept(user) {
    const selectUser = this.userService.Users.filter(us => us.id === this.currentUser.id)[0];
    this.onIgnore(user);
    selectUser.friendsId.push(user.id);
    user.friendsId.push(selectUser.id);
  }
}
