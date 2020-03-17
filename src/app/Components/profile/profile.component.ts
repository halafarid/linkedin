import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Models/User';
import { WorkExperience } from './../../Models/WorkExperience';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

   currentUser:User={};
    workExps :WorkExperience[]=[];
   months=[];
  constructor( public userService : UserService) {

    this.months=this.userService.months;
  
   }
   calcDateOfWorkExp(index)
   {

    var endMonth = this.months.indexOf(this.currentUser.workExp[index].endDate);
    var startMonth = this.months.indexOf(this.currentUser.workExp[index].startDate);
    var month = endMonth-startMonth;
    return month ? month + 1 : 0;
   }

  ngOnInit() {
    this.currentUser=this.userService.currentUser;
    this.workExps=this.currentUser.workExp;
    console.log(this.workExps);
  }

}
