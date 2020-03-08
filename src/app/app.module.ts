import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule} from '@angular/forms';

import {
  MatCardModule,
  MatMenuModule,
  MatButtonModule,

  MatFormFieldModule,
  MatInputModule,


  MatListModule
} from '@angular/material';

import { CardsComponent } from './cards/home-card/cards.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { WelcomeCardComponent } from './cards/welcome-card/welcome-card.component';
import { StartPostComponent } from './cards/start-post/start-post.component';
import { CreatePostComponent } from './cards/create-post/create-post.component';
import { ProfileComponent } from './profile/profile.component';
import { PostCardComponent } from './cards/post-card/post-card.component';
import { OptionDropdownComponent } from './option-dropdown/option-dropdown.component';


import { FooterComponent } from './footer/footer.component';

import { RegestrationComponent } from './components/regestration/regestration.component';
import { SigninComponent } from './components/signin/signin.component';
import { from } from 'rxjs';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    DropdownComponent,

    WelcomeCardComponent,
    StartPostComponent,
    CreatePostComponent,
    ProfileComponent,
    FooterComponent,


    ProfileComponent,
    RegestrationComponent,
    SigninComponent,

    WelcomeCardComponent,
    StartPostComponent,
    CreatePostComponent,

    ProfileComponent,
    PostCardComponent,
    OptionDropdownComponent,
    ProfileComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
