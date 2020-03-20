import { User } from './../../Models/User';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {
networkUsers:User[];
  constructor(public us:UserService) { }

  ngOnInit() {
    
  this.networkUsers=[...this.us.getAllExceptCurr()]
  // console.log(this.networkUsers);
  

  }

}
