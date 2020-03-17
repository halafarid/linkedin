import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from 'src/app/services/user.service';
import { WorkExperience } from './../../../Models/WorkExperience';
import { User } from 'src/app/Models/User';

@Component({
  selector: "app-experience-form",
  templateUrl: "./experience-form.component.html",
  styleUrls: ["./experience-form.component.scss"]
})
export class ExperienceFormComponent implements OnInit {
  @Input() isShow = true;
  formtitle: string = "";
  formBtn : string = "";
  editroute = this.router.url === "/experience/edit";
  isChecked = false;
  checkboxId =1;
  curMonth = "";
  curYear="";
  months=[];
  years=[];
  userId = 0;
  userWorkExp : WorkExperience={};
  employmentTypes : string[]=[];
  currentUser:User={};
  
  myForm = new FormGroup({
    title: new FormControl("", [Validators.required, Validators.minLength(3)]),
    employmentType: new FormControl("", Validators.required),
    companyName: new FormControl("", [
      Validators.required,
      Validators.minLength(3)
    ]),
    location: new FormControl("", Validators.required),
    isWorking: new FormControl("",Validators.required),
    startDate: new FormControl(),
    startYear:new FormControl(),
    endDate: new FormControl(),
    endYear:new FormControl(),
    description: new FormControl(),
    headline: new FormControl("", [
      Validators.required,
      Validators.minLength(3)
    ])
  });
  
  constructor(public router: Router , public userService : UserService) {}
  ngOnInit() {
    
    this.currentUser=this.userService.currentUser;
    
    this.employmentTypes=this.userService.employmentTypes;
    if (this.router.url === "/experience/add") {
      this.formtitle = "Add experience";
      this.formBtn="Add";
    } else {
      this.formtitle = "Edit experience";
      this.formBtn="Save";
    }
    this.months=this.userService.months;
    this.years=this.userService.years;
    this.userId=this.userService.currentUser.id;
  }
  
  get title() {
    return this.myForm.get("title");
  }
  get employmentType() {
    return this.myForm.get("employmentType");
  }

  get companyName() {
    return this.myForm.get("companyName");
  }
  get location() {
    return this.myForm.get("location");
  }
  get startDate() {
    return this.myForm.get("startDate");
  }
  get startYear() {
    return this.myForm.get("startYear");
  }
  get endDate() {
    return this.myForm.get("endDate");
  }
  get endYear() {
    return this.myForm.get("endYear");
  }

  get description() {
    return this.myForm.get("description");
  }

  get headline() {
    return this.myForm.get("headline");
  }
  onCheckboxClicked($event: MouseEvent)
  {
    
    this.isChecked = !this.isChecked;
    // tslint:disable-next-line: no-unused-expression
    this.isChecked ? true : false;
    const checkbox = $event.target as HTMLInputElement;
    this.checkboxId = +checkbox.id;
    const mon = parseInt((new Date().getMonth() + 1).toString() );
    this.curMonth=this.months[mon-1];
    const year= parseInt(new Date().getFullYear().toString());
    // const index=this.years.findIndex(year);
    const y=this.years.filter(curyear => curyear===year);
    this.curYear=y[0];
  }

  handleSubmit()
  {

    console.log(this.userId);
    console.log(this.myForm.value.title);
    console.log(this.currentUser.workExp.length);
    debugger
    if(this.myForm.valid)
    {
      this.addWorkExp();
      this.router.navigate(['/profile']);

    }
    console.log(this.myForm)
    // console.log(this.userService.Users[this.currentUser.id]);
  }

  addWorkExp()
  {
    this.userWorkExp.id=this.currentUser.workExp.length+1;
    const userData = this.userService.Users[this.userId];
    this.userWorkExp.title=this.myForm.value.title;
    debugger;
    this.userWorkExp.employmentType=this.myForm.value.employmentType;
    // this.userWorkExp.employmentType.name=this.employmentTypes[this.myForm.value.employmentType];
    this.userWorkExp.location=this.myForm.value.location;
    this.userWorkExp.startDate=this.myForm.value.startDate;
    this.userWorkExp.startYear=this.myForm.value.startYear;
    this.userWorkExp.description=this.myForm.value.description;
    this.userWorkExp.Headline=this.myForm.value.headline;
    if(this.checkboxId===0)
    {
      debugger;
      this.userWorkExp.isWorking=true;
      this.userWorkExp.endDate=this.curMonth;
      this.userWorkExp.endYear=this.curYear;
    }
    else 
    {
      this.userWorkExp.isWorking=false;
      this.userWorkExp.endDate=this.myForm.value.endDate;
      this.userWorkExp.endYear=this.myForm.value.endYear;


    }

    this.userService.currentUser.workExp.unshift(this.userWorkExp);
  }
}