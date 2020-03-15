import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss']
})
export class ExperienceFormComponent implements OnInit {
  @Input() isShow = true;
  editroute=this.router.url==='/experience/edit'
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

  constructor( public router: Router
  ) { }
  ngOnInit() {}
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
