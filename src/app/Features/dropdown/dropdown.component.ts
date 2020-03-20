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
  isSearchedFor:boolean=false;
  SignedInId:number;
  invitorId:number;
  btnText:string='Connect';
  pendingRequest:PendingRequest={};
   id = this.userService.searchedForProfile.id;
   penddingRequestid=this.userService.pendingRequests.findIndex(request => request.receiverId === this.id)
  constructor(public userService : UserService , public router : Router) { 
    // console.log(this.userService.currentUser);
    // console.log(this.userService.searchedForProfile);
    if(this.router.url==='/profile')
    {
      this.isSearchedFor=false;
    }
    else 
    {
      this.isSearchedFor=this.userService.isSearchedFor;
    }
  }

  ngOnInit() {

    debugger;

    if(this.penddingRequestid!== -1)
    {
      this.btnText='Your Request Sent';
    }
  //   list.indexOf(createItem.artNr) !== -1
  //  console.log( this.userService.currentUser.invitationsSend.indexOf(id => id ===this.))

  }
  isClicked() {
    this.isOpened = ! this.isOpened;
  }
  handleConnection()
  {
    if(this.btnText==='Connect')
    {
  
      this.btnText='Your Request Sent';
      this.SignedInId=this.userService.currentUser.id;
      this.invitorId=this.userService.searchedForProfile.id;
      this.userService.SignedInId=this.SignedInId;
      this.userService.invitorId=this.invitorId;
      this.userService.currentUser.invitationsSend.push(this.invitorId);
      this.userService.searchedForProfile.invitations.push(this.SignedInId);
      this.pendingRequest.senderId=this.SignedInId;
      this.pendingRequest.receiverId=this.invitorId;
      this.userService.pendingRequests.push(this.pendingRequest);
    }
    else 
    {
    
      this.btnText='Connect';
      const invitationID= this.userService.currentUser.invitationsSend.findIndex(id => id === this.invitorId);
      this.userService.currentUser.invitationsSend.splice(invitationID,1);
      const requestID= this.userService.searchedForProfile.invitations.findIndex(id => id === this.SignedInId);
      this.userService.searchedForProfile.invitations.splice(invitationID,1);
      this.userService.pendingRequests.splice(this.penddingRequestid,1)

    
    }
    // console.log(this.userService.Users.filter(user=> user.id === this.userService.currentUser.id));


  }

}
