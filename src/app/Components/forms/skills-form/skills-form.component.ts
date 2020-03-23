import { UserService } from "./../../../services/user.service";
import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-skills-form",
  templateUrl: "./skills-form.component.html",
  styleUrls: ["./skills-form.component.scss"]
})
export class SkillsFormComponent implements OnInit {
  @Input() isShow = true;
  skills = this.userService.currentUser.skills;
  myForm = new FormGroup({
    schoolName: new FormControl("", [
      Validators.required,
      Validators.minLength(3)
    ])
  });

  constructor(private userService: UserService) {}

  ngOnInit() {}

  get schoolName() {
    return this.myForm.get("schoolName");
  }
  deleteSkill(skillId) {
    this.skills = this.skills.filter(skill => skill.id !== skillId);
    console.log(this.skills);
  }
  onSave() {
    this.userService.currentUser.skills = this.skills;
  }
  onCancel() {
    this.skills = this.userService.currentUser.skills;
  }
}
