import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Models/User';
import { WorkExperience } from 'src/app/Models/WorkExperience';

@Component({
  selector: 'app-welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.scss']
})
export class WelcomeCardComponent implements OnInit {
 currentUser:User={};
 workexp:WorkExperience[]=[]
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.currentUser=this.userService.currentUser;
    this.workexp=this.userService.currentUser.workExp;
  }

}
