import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  courseForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ])
  });

  constructor() { }

  ngOnInit() {
  }

  get name() {
    return this.courseForm.get('name');
  }
}
