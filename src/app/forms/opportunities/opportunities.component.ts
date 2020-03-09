import { Component, OnInit, Input } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface Titles {
  name: string;
}

export interface Locations {
  name: string;
}

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

  titles: Titles[] = [ ];
  locations: Locations[] = [];

  opporForm = new FormGroup({
    locationName: new FormControl('', [
      Validators.required
    ])
  });

  addTitle(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.titles.push({name: value.trim()});
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
      this.locations.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeTitle(title: Titles): void {
    const index = this.titles.indexOf(title);

    if (index >= 0) {
      this.titles.splice(index, 1);
    }
  }

  removeLocation(location: Locations): void {
    const index = this.locations.indexOf(location);

    if (index >= 0) {
      this.locations.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

  get locationName() {
    return this.opporForm.get('locationName');
  }
}

