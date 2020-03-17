import { Skills } from './../../../Models/Skills';
import { Component, OnInit, Input } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormArray, FormControl, Validators } from '../../../../../node_modules/@angular/forms';



@Component({
  selector: 'app-add-skills-form',
  templateUrl: './add-skills-form.component.html',
  styleUrls: ['./add-skills-form.component.scss']
})


export class AddSkillsFormComponent implements OnInit {
  @Input() isShow = true;
  skillsForm: FormGroup;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  // names:string[]=[];
  skills: Skills[] = [ ];

  add(event: MatChipInputEvent): void {
    console.log(event.value);
    const input = event.input;
    const value = event.value;

    // Add our Skill
    if ((value || '').trim()) {
      this.skills.push({name:value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(skill: Skills): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  constructor(private user:UserService,
  private router:Router) { }

  ngOnInit() {
  
  }


  onSubmit(){
    this.skills.map(skill=>this.user.currentUser.skills.push(skill))
    this.user.update(this.user.currentUser)
    console.log(this.user.currentUser)
    console.log(this.user.Users);    
    this.router.navigate(['/profile'])
  }
}