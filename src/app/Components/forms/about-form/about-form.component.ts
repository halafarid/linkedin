import { UserService } from "src/app/services/user.service";
import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-about-form",
  templateUrl: "./about-form.component.html",
  styleUrls: ["./about-form.component.scss"]
})
export class AboutFormComponent implements OnInit {
  constructor(private userService: UserService) {}

  @Input() isShow = true;
  aboutForm: FormGroup;
  summary = new FormControl(this.userService.currentUser.About);

  ngOnInit() {
    this.aboutForm = new FormGroup({
      summary: this.summary
    });
  }
  submitSummary(summary) {
    let index = this.userService.Users.findIndex(
      user => user.id === this.userService.currentUser.id
    );
    this.userService.currentUser.About = summary;
    this.userService.Users[index].About = summary;
  }
}
