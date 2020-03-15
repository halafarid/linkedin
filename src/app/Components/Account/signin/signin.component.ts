import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  isValid = false;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(
    private router: Router,
    public userService: UserService) { }

  signInData = new FormGroup( {
       email : new FormControl('', [
         Validators.required,
         Validators.pattern(this.emailPattern)
        ]),
       pass : new FormControl('', [
         Validators.required,
         Validators.minLength(6)
        ])
    }
  );

  ngOnInit() {
  }

  signIn() {
    if (this.signInData.valid) {
      const users = this.userService.getAll();

      const userAccount = users.filter(user => {
        if ( this.signInData.controls.email.value === user.email && this.signInData.controls.pass.value === user.password ) {
          
          return user;
        } else {
          return false;
        }
      })[0];
      this.userService.currentUser=userAccount;
      console.log(this.userService.currentUser)
      userAccount !== undefined ? this.router.navigate(['/home'], { replaceUrl: true }) : this.isValid = true;
    }
  }
}
