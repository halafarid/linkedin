import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

   currentUser=this.userService.currentUser;
    months = [
    'January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September',
    'October', 'November', 'December'
    ];
  constructor( public userService : UserService) {

    
    console.log(this.currentUser.workExp);
   }
   calcDateOfWorkExp()
   {
    var endMonth = this.months.indexOf(this.currentUser.workExp.endDate);
    console.log(endMonth);
    var startMonth = this.months.indexOf(this.currentUser.workExp.startDate);
    console.log(startMonth)
    var month = endMonth-startMonth;
    console.log(month);
    return month ? month + 1 : 0;
   }

  ngOnInit() {

  }
}
