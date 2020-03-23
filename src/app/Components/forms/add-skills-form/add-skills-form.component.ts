import { Skills } from './../../../Models/Skills';
import { Component, OnInit, Input } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormArray, FormControl, Validators } from '../../../../../node_modules/@angular/forms';



@Component({
  selector: 'app-add-skills-form',
  templateUrl: './add-skills-form.component.html',
  styleUrls: ['./add-skills-form.component.scss']
})


export class AddSkillsFormComponent implements OnInit {
  @Input() isShow = true;
  skillsForm: FormGroup;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  skills: Skills[] = [ ];

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit() { }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.userService.addGeneric({name: value.trim()}, 'skills');
      this.skills.push({name: value.trim()});
    }

    if (input) {
      input.value = '';
    }
  }

  remove(skill: Skills): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  onSubmit() {
    this.router.navigate(['/profile']);
  }
}
