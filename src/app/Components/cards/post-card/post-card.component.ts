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
  oncomment = false;
  
  currentUser = this.userService.currentUser;
  posts = [];
  wholePosts = [];
  currentPost = {};

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.currentUser.friendsId.map(friendID => this.posts.push(this.userService.Users[friendID - 1].posts));

    this.posts.map(postArr => {
      postArr.map(post => this.wholePosts.push(post));
    });

    this.currentUser.posts.map(post => this.wholePosts.unshift(post));
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

  togglecomment(post) {
    this.currentPost = post;
    this.oncomment = !this.oncomment;
  }
}
