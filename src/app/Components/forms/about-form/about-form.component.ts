import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-about-form',
  templateUrl: './about-form.component.html',
  styleUrls: ['./about-form.component.scss']
})
export class AboutFormComponent implements OnInit {
  @Input() isShow = true;

  aboutForm = new FormGroup({
    summary: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

}
