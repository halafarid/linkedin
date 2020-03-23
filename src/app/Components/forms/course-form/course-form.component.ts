import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { WorkExperience } from 'src/app/Models/WorkExperience';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  courseForm : FormGroup;
  workExp: WorkExperience []=[]
  constructor(private userService: UserService,
              private router: Router  ) { }

  ngOnInit() {
    this.workExp=this.userService.currentUser.workExp;
    this.courseForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      association: new FormControl()
    });
    
  }

  get name() {
    return this.courseForm.get('name');
  }
  onSubmit(){
    this.userService.addGeneric(this.courseForm.value, 'courses');
    this.router.navigate(['/profile'])
  }
}
