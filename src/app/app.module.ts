import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatListModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatIconModule,
} from '@angular/material';

import { CardsComponent } from './cards/home-card/cards.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { WelcomeCardComponent } from './cards/welcome-card/welcome-card.component';
import { StartPostComponent } from './cards/start-post/start-post.component';
import { CreatePostComponent } from './cards/create-post/create-post.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    DropdownComponent,
    WelcomeCardComponent,
    StartPostComponent,
    CreatePostComponent,
    ProfileComponent,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
