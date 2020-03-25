import { Component, OnInit, Input } from "@angular/core";
import { User } from "src/app/Models/User";
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: "app-search-card-sm",
  templateUrl: "./search-card-sm.component.html",
  styleUrls: ["./search-card-sm.component.scss"]
})
export class SearchCardSmComponent implements OnInit {
  @Input() user: User;
  constructor(public router :Router , public userService : UserService) {}

  ngOnInit() {}
  onChooseProfile()
  {
    this.userService.getChooseProfile(this.user);
  }
}
