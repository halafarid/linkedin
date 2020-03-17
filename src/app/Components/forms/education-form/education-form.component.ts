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

  eduForm = new FormGroup({
    schoolName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    degree: new FormControl(),
    fieldOfStudy: new FormControl(),
    startYear: new FormControl(),
    endYear: new FormControl(),
    grade: new FormControl(),
    activity: new FormControl(),
    description: new FormControl()
  });


  constructor(
    public router: Router,
    public userService: UserService
  ) { }

  ngOnInit() {
    if (!this.isAdd) {
      const eduObj = this.userService.educationForm;
      const education = this.eduForm.controls;
      // tslint:disable-next-line: forin
      for (const edu in education) {
        education[edu].value = eduObj[edu];
      }
    }
  }

  submit() {
    if (this.isAdd && this.eduForm.valid) {
      this.userService.addEducation(this.eduForm.value);
      this.router.navigate(['/profile']);
    } else if (!this.isAdd) {
      this.userService.editEducation(this.eduForm.value, this.userService.educationForm.id);
      this.router.navigate(['/profile']);
    }
  }

  get schoolName() {
    return this.eduForm.get('schoolName');
  }
}
