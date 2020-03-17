import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.scss']
})
export class EducationFormComponent implements OnInit {
  @Input() isShow = true;
  isAdd = this.router.url === '/education/add';

  currentUser = this.userService.currentUser;

  educationForm = new FormGroup({
    schoolName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    degree: new FormControl(),
    FieldOfStudy: new FormControl(),
    startYear: new FormControl(),
    endYear: new FormControl(),
    grade: new FormControl(),
    activities: new FormControl(),
    description: new FormControl()
  });

  constructor(
    public router: Router,
    public userService: UserService
  ) { }

  ngOnInit() {
    if (this.isAdd) {
      console.log('add')
    } else {
      console.log('edit');
    }
  }

  submit() {
    if (this.isAdd && this.educationForm.valid) {
      this.userService.addEducation(this.educationForm.value);
      this.router.navigate(['/profile']);
    }
  }

  get schoolName() {
    return this.educationForm.get('schoolName');
  }
}
