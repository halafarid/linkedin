import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Models/User';
import { WorkExperience } from 'src/app/Models/WorkExperience';

@Component({
  selector: 'app-navdropdown',
  templateUrl: './navdropdown.component.html',
  styleUrls: ['./navdropdown.component.scss']
})
export class NavdropdownComponent implements OnInit {
  currentUser:User={}
  workExp:WorkExperience[]=[]
  constructor(private userService:UserService) { }

  ngOnInit() {
   this.currentUser=this.userService.currentUser;
   this.workExp=this.userService.currentUser.workExp;
  }

}
