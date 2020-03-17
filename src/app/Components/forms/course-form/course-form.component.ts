import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  courseForm : FormGroup;

  constructor(private userService: UserService,
              private router: Router  ) { }

  ngOnInit() {
    this.courseForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ])
    });
    
  }

  get name() {
    return this.courseForm.get('name');
  }
  onSubmit(){
    this.userService.addcourses(this.courseForm.value);
    this.router.navigate(['/profile'])
  }
}
