import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {


  @Input() isOpened = false;
  constructor() { }

  ngOnInit() {
  }
  isClicked() {
    this.isOpened = ! this.isOpened;
  }

}
