import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  constructor() { }
  ishover = false;
  ishoverReact = false;
  ngOnInit() {
  }
onhover() {
    this.ishover = true;
    this.ishoverReact = true;


}

onleave() {
this.ishover = false;

}
onleaveReact() {
  this.ishoverReact = false;
  }
}
