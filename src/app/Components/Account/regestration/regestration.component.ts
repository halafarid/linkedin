import { User } from "./../../../Models/User";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "./../../../services/user.service";

@Component({
  selector: "app-regestration",
  templateUrl: "./regestration.component.html",
  styleUrls: ["./regestration.component.scss"]
})
export class RegestrationComponent implements OnInit {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
  // passPattern = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})';
  isExist = false;

  userData = new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.pattern(this.emailPattern)
    ]),
    pass: new FormControl("", [
      Validators.required,
      Validators.minLength(6)
      // Validators.pattern(this.passPattern)
    ])
  });

  constructor(private router: Router, public userService: UserService) {}

  ngOnInit() {}

  registration() {
    if (this.userData.valid) {
      const users = this.userService.getAll();
      const userAccount = users.filter(
        user => user.email === this.userData.controls.email.value
      );

      if (userAccount.length === 0) {
        var res = this.userData.value.email.split("@");
        console.log(res[0]);
        const newUser: User = {
          userName: res[0],
          email: this.userData.value.email,
          password: this.userData.value.pass,
          About: "...",
          workExp: [],
          userInfo: {
            jobOpps: {
              title: [],
              jobLocation: [],
              jobTypes: []
            }
          },
          education: [
            {
              id: 1
            }
          ],
          skills: [{}],
          courses: [{}],
          posts: [],
          friendsId: [],
          invitations: [],
          invitationsSend: [],
          messages: []
        };
        newUser.email = this.userData.value.email;
        newUser.password = this.userData.value.pass;

        this.userService.add(newUser);
        this.userService.currentUser = newUser;
        setTimeout(() => {
          this.router.navigate(["/home"], { replaceUrl: true });
        }, 500);
      } else {
        this.isExist = true;
      }
    }
  }

  // validateMail(email: HTMLInputElement) {
  //   let validMail = false ;
  //   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
  //     validMail = true;
  //   }
  //   return validMail;
  // }
  // validatePass(pass: HTMLInputElement) {
  //   let validPass = false ;
  //   const strongRegex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
  //   if (strongRegex.test(pass.value)) {
  //     validPass = true;
  //   }
  //   return validPass;
  // }
  // validateData(email: HTMLInputElement , pass: HTMLInputElement) {
  //   let validData = false;
  //   if (this.validateMail(email) && this.validatePass(pass)) {
  //     validData = true;
  //   } else if (!this.validateMail(email)) {
  //     alert ('enter valid email');
  //   } else if (!this.validatePass(pass)) {
  //     alert('enter valid pass');
  //   }
  //   return validData;
  // }
}
