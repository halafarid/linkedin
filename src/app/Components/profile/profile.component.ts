import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Models/User';
import { WorkExperience } from './../../Models/WorkExperience';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  currentUser=this.userService.currentUser;
  educationArr = this.currentUser.education;


  
   
  workExps: WorkExperience[] = [{}];
  months = [];
  isSerchedFor:boolean=false;
  searchedForUser:User={};
  SignedInId:number ; 
  invitorId:number;


  constructor( public userService: UserService , public router : Router) {
    this.months = this.userService.months;
    // this.months=this.userService.months;
  
    
   }
  
  ngOnInit() {
  
    if(this.router.url==='/profile')
        {
          this.isSerchedFor=false;    
         this.currentUser=this.userService.currentUser;
        }
        else 
        {
          debugger;
          this.isSerchedFor=this.userService.isSearchedFor;
          this.SignedInId=this.currentUser.id;
          this.invitorId=this.userService.searchedForProfile.id;
          this.userService.SignedInId=this.SignedInId;
          this.userService.invitorId=this.invitorId;
          this.currentUser=this.userService.searchedForProfile;
    }
    let user = this.userService.Users.filter(user => user.id===this.currentUser.id)[0];
    if(user.workExp.length>0)
    {

      this.workExps=user.workExp;
    }
    this.workExps=this.userService.Users[this.currentUser.id].workExp;
    
   
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
    // this.userService.educationForm =  this.userService.getFormById(id,'education');
    this.userService.getEducationById(id);
}
getExperience(id:number)
{
  this.userService.experienceForm=this.userService.getFormById(id ,'workExp');
  


}
   
  
}
