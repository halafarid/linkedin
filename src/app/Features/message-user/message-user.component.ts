import { Component, OnInit ,TemplateRef, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/Models/User';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-message-user",
  templateUrl: "./message-user.component.html",
  styleUrls: ["./message-user.component.scss"]
})
export class MessageUserComponent implements OnInit {

  // @Output() isOpened : EventEmitter<boolean>;
  open:boolean=true;
  senderId:number;
  recievierId:number;
  sender:User={};
  Reciever:User={};
  isOpened: boolean=false;
  isPopUP: boolean=false;
  

  // myForm = new FormGroup({
  //   message: new FormControl("", Validators.required)
  // });
  constructor(public router:Router, public userService:UserService) { 
     debugger;
    if(this.userService.isReply)
    {
      this.isPopUP=this.userService.isPopUp;
      const item = this.userService.userToReply;
      this.recievierId=item;
      this.senderId=this.userService.currentUser.id;
      
    }
    else 
    {
      this.isPopUP=true;
      this.senderId=this.userService.SignedInId;
      this.recievierId=this.userService.invitorId;

    }
    this.sender=this.userService.getById(this.senderId);
    this.Reciever=this.userService.Users[this.recievierId-1];
    

  }

  ngOnInit() {

  
  }
 
  // sendMessage(text)
  // {
  //    console.log(text)
  //    this.Reciever.messages.push({senderId:this.senderId,message:'hii'})
  // }

  closeMessage()
  {
    this.open=false;
    
  }
  sendMessageToUser(msg)
  {
 
    debugger;
     
    this.Reciever.messages.push({senderId:this.senderId,senderName:this.sender.userName,isPopUp:false,message:msg});
    // console.log(this.userService.Users[this.recievierId].messages);
    this.router.navigate(['profile', this.recievierId]);
    this.open=false;
    // this.isOpened.next(false);
    
    
  }

}
