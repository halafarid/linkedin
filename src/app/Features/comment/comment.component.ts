import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() currentPost;
  comments = [];

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.comments = this.currentPost.comments;
  }

  addComment(e) {
    const value = e.target.value;
    this.currentPost.replies++;
    this.comments.push({commentId: 1, userId: this.userService.currentUser.id, body: value, likes: 0, replies: 0,liked:false});
    e.target.value="";
  }
  onLike(comment) {
    if(!comment.liked)
    {comment.likes++;comment.liked=!comment.liked;}
    else
    {comment.likes--;comment.liked=!comment.liked;}
  
  }
}
