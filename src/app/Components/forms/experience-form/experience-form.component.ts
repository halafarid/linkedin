import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss']
})
export class ExperienceFormComponent implements OnInit {
  @Input() isShow = true;
  onAdd = true;
  isChecked = false;

  myForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    company: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    headline: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
  });

  constructor() { }

  ngOnInit() {
  }

  onChecked() {
    this.isChecked = !this.isChecked;
    // tslint:disable-next-line: no-unused-expression
    this.isChecked ? true : false;
  }

  get title() {
    return this.myForm.get('title');
  }

  get company() {
    return this.myForm.get('company');
  }

  get headline() {
    return this.myForm.get('headline');
  }
}
