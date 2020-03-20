import { User } from './../../../Models/User';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatButton } from '@angular/material';

@Component({
  selector: 'app-network-card',
  templateUrl: './network-card.component.html',
  styleUrls: ['./network-card.component.scss']
})
export class NetworkCardComponent implements OnInit {
  @Input() user: User;
  pinding;
  networkUsers;

  constructor(public userService: UserService) { }

  currentUser = this.userService.currentUser;

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.networkUsers = this.userService.getAllExceptCurr().map(user => user.id);
    this.pinding = this.networkUsers.filter(id => this.currentUser.invitationsSend.includes(id));
  }

  onClick(btnValue: MatButton, userId) {
    const value = btnValue._elementRef.nativeElement.innerText;
    const selectUser = this.userService.Users.filter(user => user.id === this.currentUser.id)[0];

    if (value === 'Pinding') {
      const index = this.currentUser.invitationsSend.indexOf(userId);
      const index2 = this.userService.Users[userId - 1].invitations.indexOf(selectUser.id);
      const index3 = this.pinding.indexOf(userId);

      this.currentUser.invitationsSend.splice(index, 1);
      this.userService.Users[selectUser.id - 1].invitationsSend.splice(index, 1);
      this.userService.Users[userId - 1].invitations.splice(index2, 1);
      this.pinding.splice(index, 1);

      console.log(this.pinding);

      btnValue._elementRef.nativeElement.innerText = 'Connect';
      btnValue._elementRef.nativeElement.className = 'btn btn--center btn-text--primary btn-border--primar';

    } else if (value === 'Connect') {
      this.currentUser.invitationsSend.push(userId);
      this.userService.Users[selectUser.id - 1].invitationsSend.push(userId);
      this.userService.Users[userId - 1].invitations.push(this.currentUser.id);

      console.log(this.pinding);
      this.pinding.push(userId);
      console.log(this.pinding);

      btnValue._elementRef.nativeElement.innerText = 'Pinding';
      btnValue._elementRef.nativeElement.className = 'btn btn--center btn-text--info btn-border--info';
    }
    // console.log(this.userService.currentUser);
    // console.log(this.userService.Users);
  }
}