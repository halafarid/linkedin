import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrls: ['./regestration.component.scss']
})
export class RegestrationComponent implements OnInit {
 
   userData = new FormGroup(
     {
        email : new FormControl('',Validators.required), 
        pass : new FormControl('',Validators.required)
     }
   );
  constructor() { 
  
  }
  validateMail(email:HTMLInputElement)
  {
    let validMail = false ;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
      validMail=true;
    }
    return validMail;
  }
  validatePass(pass : HTMLInputElement)
  {
    let validPass = false ;
    var strongRegex = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if(strongRegex.test(pass.value))
    {
      validPass=true;
    }
    return validPass;
  }
  validateData(email : HTMLInputElement , pass : HTMLInputElement)
  {
    let validData = false;
    if (this.validateMail(email) && this.validatePass(pass))
    {
      validData=true;
    }
    else if(!this.validateMail(email))
    {
      alert ('enter valid email')
    }
    else if(!this.validatePass(pass))
    {
      alert('enter valid pass')
    }
     return validData;
   
  
  }


  ngOnInit() {
  }

}
