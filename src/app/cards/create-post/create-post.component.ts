import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor() { }

  ngOnInit() {

}
onSpanClicked(modal)
{
  modal.style.display = "none";

}
// onWindowClick(modal)
// {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }

// }
onBtnClick(modal) {
  modal.style.display = "block";
}
}
