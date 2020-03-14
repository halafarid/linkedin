import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public us:UserService) { 
  }
  
  ngOnInit() {
    
    console.log(this.us.getAll());
    // this.us.getById(1);
    // this.us.add({id:2,userName:"sara"})
    // this.us.updateById({id:1,userName:"sara"})
    // this.us.deleteById(1);

  }

}
