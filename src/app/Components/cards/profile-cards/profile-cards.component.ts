import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-cards',
  templateUrl: './profile-cards.component.html',
  styleUrls: ['./profile-cards.component.scss']
})
export class ProfileCardsComponent implements OnInit {

  isSearchedFor : boolean=false;
  currentUser = this.userService.currentUser;
  courses =[];
  constructor( public userService : UserService) {
    this.courses=this.userService.currentUser.courses;
    this.isSearchedFor=this.userService.isSearchedFor;
   }

  ngOnInit() {
    // console.log(this.currentUser.courses[0].name);
  }

}
