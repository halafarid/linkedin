import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule} from '@angular/forms';

import {
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
<<<<<<< HEAD
  MatListModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatIconModule,
=======

  MatFormFieldModule,
  MatInputModule,


  MatListModule
>>>>>>> 09a543be5be1f08a91f6f3a2b15cac02b50c7ad7
} from '@angular/material';

import { CardsComponent } from './cards/home-card/cards.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { WelcomeCardComponent } from './cards/welcome-card/welcome-card.component';
import { StartPostComponent } from './cards/start-post/start-post.component';
import { CreatePostComponent } from './cards/create-post/create-post.component';
import { ProfileComponent } from './profile/profile.component';
<<<<<<< HEAD
import { FormsComponent } from './forms/forms.component';
=======
import { PostCardComponent } from './cards/post-card/post-card.component';
import { OptionDropdownComponent } from './option-dropdown/option-dropdown.component';


import { FooterComponent } from './footer/footer.component';

import { RegestrationComponent } from './components/regestration/regestration.component';
import { SigninComponent } from './components/signin/signin.component';
import { from } from 'rxjs';

>>>>>>> 09a543be5be1f08a91f6f3a2b15cac02b50c7ad7

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    DropdownComponent,

    WelcomeCardComponent,
    StartPostComponent,
    CreatePostComponent,
    ProfileComponent,
<<<<<<< HEAD
    FormsComponent,
=======
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
    ProfileComponent
>>>>>>> 09a543be5be1f08a91f6f3a2b15cac02b50c7ad7
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
<<<<<<< HEAD
    MatListModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatIconModule
=======
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatListModule
>>>>>>> 09a543be5be1f08a91f6f3a2b15cac02b50c7ad7
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
