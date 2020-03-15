import { User } from "./../../Models/User";
import { UserService } from "./../../services/user.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  constructor(private userService: UserService) {}
  users;
  subNav = false;
  searchResult = false;
  match = false;
  enableSeachBy() {
    this.subNav = true;
  }
  disableSeachBy() {
    this.subNav = false;
  }
  enableSeachResult() {
    this.searchResult = true;
    this.subNav = false;
  }
  disableSeachResult() {
    this.searchResult = false;
  }
  SeachResult(e) {
    this.enableSeachResult();
    this.users = this.userService.getByName(e.target["value"]);
    if (this.users.length === 0) {
      this.match = true;
      this.disableSeachBy();
    }
  }
  ngOnInit() {}
}
