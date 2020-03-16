import { User } from './../../../Models/User';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent implements OnInit {
friends:User[];
  constructor(public us:UserService) { }

  ngOnInit() {
    this.friends=[...this.us.getFriends()]
    
  }

}
