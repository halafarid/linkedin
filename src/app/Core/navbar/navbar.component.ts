import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  constructor() {}
  subNav = false;
  enableSeachBy() {
    this.subNav = true;
  }
  disableSeachBy() {
    this.subNav = false;
  }
  ngOnInit() {}
}
