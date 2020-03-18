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


  currentUser=this.userService.currentUser;
  educationArr = this.currentUser.education;

  workExps: WorkExperience[] = [];
  months = [];


  constructor( public userService: UserService) {
    this.months = this.userService.months;
   }
  
  ngOnInit() {
    this.workExps=this.currentUser.workExp;
    // console.log(this.workExps);
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges() {
    console.log(this.currentUser.education);
    this.educationArr = this.currentUser.education;
  }

  calcDateOfWorkExp(index) {
    var endMonth = this.months.indexOf(this.currentUser.workExp[index].endDate);
    var startMonth = this.months.indexOf(this.currentUser.workExp[index].startDate);
    var month = endMonth - startMonth;
    return month ? month + 1 : 0;
  }

  getEducation(id: number) {
    this.userService.getEducationById(id);
}
}
