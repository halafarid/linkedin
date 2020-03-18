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
    isWorking: new FormControl(),
    startDate: new FormControl(),
    startYear:new FormControl(),
    endDate: new FormControl(),
    endYear:new FormControl(),
    description: new FormControl(),
    headline: new FormControl()
  });
  
  constructor(public router: Router , public userService : UserService) {
    debugger;
    // this.myForm.controls=this.userService.experienceForm;
  
  }
  ngOnInit() {
    
    this.currentUser=this.userService.currentUser;
    
    this.employmentTypes=this.userService.employmentTypes;
    if (this.router.url === "/experience/add") {
      this.formtitle = "Add experience";
      this.formBtn="Add";
    } else {
    debugger;
      this.formtitle = "Edit experience";
      this.formBtn="Save";
      this.fillForm();
      // this.editExpForm(this.userService.workExpId);
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

  handleSubmit(btn)
  {
    if(this.myForm.valid)
    
    {
      debugger;
      if(btn==='Add')
      {
        this.addWorkExp();
        
      }
      else if(btn==='Save')
      {
        this.editExpForm(this.userService.workExpId);
      }
      this.router.navigate(['/profile']);

     }
    
  }
  

  addWorkExp()
  {
   
    const userData = this.userService.Users[+this.userId -1];
    const userWorkExp=this.getFormData();
    let user =this.userService.Users.filter(user=> user.id===this.currentUser.id)[0];
    user.workExp.unshift(userWorkExp);
    userWorkExp.id=this.currentUser.workExp.length+1;
    this.userWorkExp=userWorkExp;
    this.userService.Users[this.currentUser.id]=user;
    
  }
  getFormData()
  {
    // this.userWorkExp.employmentType.name=this.employmentTypes[this.myForm.value.employmentType];
    const userWorkExp :WorkExperience={};
    userWorkExp.title=this.myForm.value.title;
    userWorkExp.employmentType=this.myForm.value.employmentType;
    userWorkExp.location=this.myForm.value.location;
    userWorkExp.startDate=this.myForm.value.startDate;
    userWorkExp.startYear=this.myForm.value.startYear;
    userWorkExp.description=this.myForm.value.description;
    userWorkExp.Headline=this.myForm.value.headline;
    if(this.checkboxId===0)
    {
      
      userWorkExp.isWorking=true;
      userWorkExp.endDate=this.curMonth;
      userWorkExp.endYear=this.curYear;
    }
    else 
    {
      userWorkExp.isWorking=false;
      userWorkExp.endDate=this.myForm.value.endDate;
      userWorkExp.endYear=this.myForm.value.endYear;


    }
    return userWorkExp;

  }
  fillForm()
  {
    debugger;
    this.myForm.controls["title"].setValue(this.userService.experienceForm.title);
    this.myForm.controls["employmentType"].setValue(this.userService.experienceForm.employmentType);
    this.myForm.controls["companyName"].setValue(this.userService.experienceForm.companyName);
    this.myForm.controls["location"].setValue(this.userService.experienceForm.location);
    this.myForm.controls["startDate"].setValue(this.userService.experienceForm.startDate);
    this.myForm.controls["startYear"].setValue(this.userService.experienceForm.startYear);
  }
  editExpForm(id:number)
  {
   const userWorkExp=this.getFormData();
   console.log(userWorkExp);
   debugger;
   let currentWorkExp= this.userService.Users[this.currentUser.id].workExp.filter(user=>user.id===this.currentUser.id)[0];
   currentWorkExp.title=userWorkExp.title;
   this.userService.Users[this.currentUser.id].workExp.filter(user=>user.id===this.currentUser.id)[0]=userWorkExp;
   console.log(this.userService.Users[this.currentUser.id].workExp.filter(user=>user.id===this.currentUser.id)[0])

   //  debugger;
  //  let user =this.userService.Users.filter(user=> user.id===this.currentUser.id)[0];
  //  user.workExp[id]=userWorkExp;
  //  this.userService.Users[this.currentUser.id-1]=user;


  }
}