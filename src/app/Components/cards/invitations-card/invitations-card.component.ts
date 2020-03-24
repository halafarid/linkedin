import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invitations-card',
  templateUrl: './invitations-card.component.html',
  styleUrls: ['./invitations-card.component.scss']
})
export class InvitationsCardComponent implements OnInit {


  currentUser = this.userService.currentUser;
  invitations = this.currentUser.invitations;
  messages = [];
  invitationsUsers = this.invitations.map(invitation => this.userService.getById(invitation));
  senderUsers : User[]=[];
  senderIds :number[];
  items =[];
  cardTitle:string;
  messageOpended:boolean=false;
  

  constructor(public userService: UserService , public router:Router) {

   }

  ngOnInit() {
    if(this.router.url==='/notifications')
    {
      this.items=this.invitationsUsers;
      this.cardTitle='Invitations';
    }
    else if(this.router.url==='/messages')
    {
      this.cardTitle='Messages';
      
    if(this.currentUser.messages!==undefined)
    {
   
      this.senderIds=this.currentUser.messages.map(msg => msg.senderId);
      for(let i = 0 ; i <this.senderIds.length;i++)
      {
        this.messages=this.userService.currentUser.messages.filter(msg=>msg.senderId=this.senderIds[i]);
        
      }
      // for (const id in this.senderIds)
      // {
      //   this.messages=this.userService.Users.map(user=> this.userService.getById(+id));
      // }
      this.items=this.messages;
      
    }

    }
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

  messageClicked(item,$event)
  {
    
    debugger;
    console.log(item.senderId);
    this.userService.isReply=true;
    this.userService.isPopUp=true;
    this.userService.userToReply=item.senderId;
    this.router.url==='/message';
    this.messageOpended=!this.messageOpended;
    
  }

}
