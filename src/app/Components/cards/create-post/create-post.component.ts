import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  constructor() { 
   
  }
  block=false;

  ngOnInit() {

}
onSpanClicked()
{
  this.block=false;

}
// onWindowClick(modal)
// {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }

// }
onBtnClick() {
  console.log("ghjn")
  this.block=true;
  console.log(this.block)
  // modal.style.display = "block";
}
}
