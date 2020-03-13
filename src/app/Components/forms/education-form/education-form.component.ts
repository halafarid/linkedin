import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.scss']
})
export class EducationFormComponent implements OnInit {
  @Input() isShow = true;

  myForm = new FormGroup({
    schoolName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
  });

  constructor() { }

  ngOnInit() {
  }

  get schoolName() {
    return this.myForm.get('schoolName');
  }
}
