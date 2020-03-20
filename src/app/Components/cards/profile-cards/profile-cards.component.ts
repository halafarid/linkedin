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
  constructor( public userService : UserService) {
    this.isSearchedFor=this.userService.isSearchedFor;
   }

  ngOnInit() {
  }

}
