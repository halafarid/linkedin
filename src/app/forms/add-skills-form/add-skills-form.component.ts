import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material';

export interface Fruit {
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
  // readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  fruits: Fruit[] = [ ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit() {
  }
}
