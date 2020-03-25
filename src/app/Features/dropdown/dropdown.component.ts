import { Component, OnInit, Output, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { PendingRequest } from './../../Models/pendingReaquest';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  
  
  @Input() isOpened = false;
  isSearchedFor: boolean = false;
  @Input() messageOpended = false;
  SignedInId: number;
  invitorId: any;
  isFriend: boolean = false;

  btnText: string = 'Connect';
   pendingRequest: PendingRequest = {};
   id = this.userService.searchedForProfile.id;
   friends : number[] = [];
   isAccepted: boolean = false;
  //  request : PendingRequest={};
   isRequest: boolean = false;
   penddingRequestid = this.userService.pendingRequests.findIndex(request => request.receiverId === this.id)
  constructor(public userService : UserService , public router : Router) { 
    // console.log(this.userService.currentUser);
    // console.log(this.userService.searchedForProfile);
    this.friends = this.userService.currentUser.friendsId;
    // this.request.senderId=this.SignedInId;
    // this.request.receiverId=this.invitorId;
    
    if (this.router.url === '/profile')
    {
      this.isSearchedFor = false;
    }
    else 
    {
      this.isSearchedFor = this.userService.isSearchedFor;
    }
  }

  ngOnInit() {
    if (this.penddingRequestid !== -1)
    {
      this.btnText = 'Your Request Sent';
    }

    if (this.friends.indexOf(this.userService.searchedForProfile.id) !== -1)
    {
      this.isFriend = true;
    }
    
    if (this.userService.currentUser.invitations.indexOf(this.userService.searchedForProfile.id) !== -1)
    {
       this.btnText = 'Accept Request';
  
       this.isRequest = true;
    }
  //   list.indexOf(createItem.artNr) !== -1
  //  console.log( this.userService.currentUser.invitationsSend.indexOf(id => id ===this.))

  }
  isClicked() {
    this.isOpened = ! this.isOpened;
  }
  cancelClicked()
  {
    if (this.btnText === 'Connect')
    {
      this.handelConnectBtn();
 
    }
    else 
    {
      this.userService.searchedForProfile.invitationsSend.splice(this.userService.currentUser.id);
      const index = this.userService.currentUser.invitations.findIndex(user => this.userService.searchedForProfile.id);
      this.userService.currentUser.invitations.splice(index);
      this.btnText = 'Connect'
      this.isRequest = false;
    }
  }
  handelConnectBtn() {
    this.btnText = 'Your Request Sent';
    this.SignedInId = this.userService.currentUser.id;
    this.invitorId = this.userService.searchedForProfile.id;
    this.userService.SignedInId = this.SignedInId;
    this.userService.invitorId = this.invitorId;
    this.userService.currentUser.invitationsSend.push(this.invitorId);
    this.userService.searchedForProfile.invitations.push(this.SignedInId);
    this.pendingRequest.senderId = this.SignedInId;
    this.pendingRequest.receiverId = this.invitorId;
    this.userService.pendingRequests.push(this.pendingRequest);
  }

  handleConnection() {
  if (this.btnText === 'Connect') {
     this.handelConnectBtn();
    }  else if (this.btnText === 'Accept Request') {
      this.userService.currentUser.friendsId.push(this.userService.searchedForProfile.id);
      this.btnText = 'Friends';
      this.isAccepted = true;
    }
   
    else 
    {
    
      this.btnText = 'Connect';
      const invitationID = this.userService.currentUser.invitationsSend.findIndex(id => id === this.invitorId);
      this.userService.currentUser.invitationsSend.splice(invitationID, 1);
      const requestID = this.userService.searchedForProfile.invitations.findIndex(id => id === this.SignedInId);
      this.userService.searchedForProfile.invitations.splice(invitationID, 1);
      this.userService.pendingRequests.splice(this.penddingRequestid, 1)

    
    }
    // console.log(this.userService.Users.filter(user=> user.id === this.userService.currentUser.id));


  }
  messageClicked()
  {
    debugger;
    this.router.url === '/message';
    this.messageOpended = !this.messageOpended;
    
  }
}
