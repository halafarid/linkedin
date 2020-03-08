import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  @Input() isShow = false;

  myForm = new FormGroup({
    schoolName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
  });

  constructor() { }

  ngOnInit() {
  }

  get schoolName() {
    return this.myForm.get('schoolName');
  }

}
