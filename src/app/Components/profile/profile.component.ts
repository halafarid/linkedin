import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

   currentUser = this.userService.currentUser;
   educationArr = this.currentUser.education;

   months = [
     'January', 'February', 'March', 'April', 'May',
     'June', 'July', 'August', 'September',
     'October', 'November', 'December'
    ];
    constructor( public userService : UserService) { }
    
    calcDateOfWorkExp()
    {
    var endMonth = this.months.indexOf(this.currentUser.workExp.endDate);
    var startMonth = this.months.indexOf(this.currentUser.workExp.startDate);
    var month = endMonth-startMonth;
    return month ? month + 1 : 0;
  }
  
  ngOnInit() {
  }
}
