import { Posts } from '../../../../../../linkedin/src/app/Models/Posts';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  ishover = false;
  ishoverReact = false;
  // oncomment = false;
  
  currentUser = this.userService.currentUser;
  posts = [];
  wholePosts:Posts[] = [];
  currentPost:Posts = {};

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.currentUser.friendsId.map(friendID => this.posts.push(this.userService.Users[friendID - 1].posts));

    this.posts.map(postArr => {
      postArr.map(post => this.wholePosts.push(post));
    });
    this.currentUser.posts.map(post=>this.wholePosts.unshift(post))
  }


  onhover(post) {
      // this.ishover = true;
      // this.ishoverReact = true;
      post.onHover=true;
      post.onHoverReact=true;
  }

  onleave(post) {
  // this.ishover = false;
  post.onHover=false;


  }
  onleaveReact(post) {
    // this.ishoverReact = false;
    post.onHoverReact=false;

  }

  togglecomment(post) {
    // this.currentPost = post;
    post.onComment=!post.onComment;
    // this.oncomment = !this.oncomment;
  }
  addLike(post)
  {if(!post.liked)
    {post.likes++;post.liked=!post.liked;}
    else
    {post.likes--;post.liked=!post.liked;}
  }
  onReactionClick(post)
  {
    post.onHover=false;
      post.onHoverReact=false;
  }
}
