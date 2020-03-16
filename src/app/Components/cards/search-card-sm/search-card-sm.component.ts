import { Component, OnInit, Input } from "@angular/core";
import { User } from "src/app/Models/User";

@Component({
  selector: "app-search-card-sm",
  templateUrl: "./search-card-sm.component.html",
  styleUrls: ["./search-card-sm.component.scss"]
})
export class SearchCardSmComponent implements OnInit {
  @Input() user: User;
  constructor() {}

  ngOnInit() {}
}
