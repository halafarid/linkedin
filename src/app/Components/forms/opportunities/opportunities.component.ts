import { JobTypes } from './../../../Models/JobTypes';
import { Component, OnInit, Input } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { FormGroup, FormControl, Validators, NgForm, FormArray } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { JobOpportunities } from 'src/app/Models/JobOpportunities';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.scss']
})


export class OpportunitiesComponent implements OnInit {
  @Input() isShow = true;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  jobTypes:JobTypes[]=[];
  titles: string[] = [ ];
  locations: string[] = [];
  jobType:FormArray;
  // opporForm:FormGroup;
  opporForm=new FormGroup({
    locationName: new FormControl('', [
          Validators.required
        ]),
    jobType:new FormArray([]),
   

  })


  // opporForm = new FormGroup({
  //   locationName: new FormControl('', [
  //     Validators.required
  //   ])
  // });

  addTitle(event: MatChipInputEvent): void {
    console.log(event.value)
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.titles.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  addLocations(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.locations.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeTitle(title: string): void {
    const index = this.titles.indexOf(title);

    if (index >= 0) {
      this.titles.splice(index, 1);
    }
  }

  removeLocation(location: string): void {
    const index = this.locations.indexOf(location);

    if (index >= 0) {
      this.locations.splice(index, 1);
    }
  }

  constructor(public us:UserService) { }

  ngOnInit() {
    this.jobTypes=this.us.jopTypes;
this.titles=this.us.currentUser.userInfo.jobOpps.title;  
this.locations=this.us.currentUser.userInfo.jobOpps.jobLocation;    
  }

  get locationName() {
    return this.opporForm.get('locationName');
  }
  getById(id: number): JobTypes {
    id = +id;

    if (id >= 0) {
      const job = this.us.jopTypes.find(u => u.id === id);
      return job;
    }
  }
  onSave(opporForm:NgForm)
  {
    console.log(opporForm);

   this.us.currentUser.userInfo.jobOpps.title=this.titles;
   this.us.currentUser.userInfo.jobOpps.jobLocation=this.locations;
   this.us.currentUser.userInfo.jobOpps.jobTypes=this.opporForm.getRawValue().jobType.map(j=>this.getById(j))
this.us.update(this.us.currentUser)
console.log(this.us.Users);

    // console.log(this.opporForm.getRawValue());
    //update

    

  }
  onJobTypeClicked(event)
  {
    const checkBox=event.target.firstChild;
     this.jobType= this.opporForm.controls.jobType as FormArray;
    console.log(checkBox.checked)
    if(!checkBox.checked)
    {
     this.jobType.push(new FormControl(checkBox.value));
     console.log(checkBox.value)
     
    }
    else
    {
     console.log(checkBox.value)

      const index= this.jobType.controls.findIndex(a => a.value==+checkBox.value)
      this.jobType.controls.splice(index,1);
    }
    console.log(this.jobType)

  }
}

