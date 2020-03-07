import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatListModule
} from '@angular/material';

import { CardsComponent } from './cards/home-card/cards.component';
import { DropdownComponent } from './dropdown/dropdown.component';
<<<<<<< HEAD
import { WelcomeCardComponent } from './cards/welcome-card/welcome-card.component';
import { StartPostComponent } from './cards/start-post/start-post.component';
import { CreatePostComponent } from './cards/create-post/create-post.component';
=======
import { ProfileComponent } from './profile/profile.component';
>>>>>>> 97032c91170969506ae151a391ffd231ef0493e6

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    DropdownComponent,
<<<<<<< HEAD
    WelcomeCardComponent,
    StartPostComponent,
    CreatePostComponent
=======
    ProfileComponent
>>>>>>> 97032c91170969506ae151a391ffd231ef0493e6
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
