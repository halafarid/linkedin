import { Component, OnInit, Input } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';

export interface Skills {
  name: string;
}

@Component({
  selector: 'app-add-skills-form',
  templateUrl: './add-skills-form.component.html',
  styleUrls: ['./add-skills-form.component.scss']
})


export class AddSkillsFormComponent implements OnInit {
  @Input() isShow = true;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  skills: Skills[] = [ ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our Skill
    if ((value || '').trim()) {
      this.skills.push({name: value.trim()});
    }

    // Reset the input value
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

  constructor() { }

  ngOnInit() {
  }
}
