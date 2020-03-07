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
<<<<<<< HEAD
  MatFormFieldModule,
  MatInputModule
=======
  MatListModule
>>>>>>> b118ffb48addf64f0c2fa214f6055f686bbc4fe9
} from '@angular/material';

import { CardsComponent } from './cards/home-card/cards.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { WelcomeCardComponent } from './cards/welcome-card/welcome-card.component';
import { StartPostComponent } from './cards/start-post/start-post.component';
import { CreatePostComponent } from './cards/create-post/create-post.component';
import { ProfileComponent } from './profile/profile.component';
<<<<<<< HEAD
import { FooterComponent } from './footer/footer.component';
=======
import { RegestrationComponent } from './components/regestration/regestration.component';
import { SigninComponent } from './components/signin/signin.component';
import { from } from 'rxjs';
>>>>>>> 3c7f1d1a95b454f372f95415922fcf4b6099a8ee

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    DropdownComponent,
<<<<<<< HEAD
    WelcomeCardComponent,
    StartPostComponent,
    CreatePostComponent,
    ProfileComponent,
    FooterComponent,
=======
<<<<<<< HEAD
    ProfileComponent,
    RegestrationComponent,
    SigninComponent
=======
    WelcomeCardComponent,
    StartPostComponent,
    CreatePostComponent,
    ProfileComponent
>>>>>>> b118ffb48addf64f0c2fa214f6055f686bbc4fe9
>>>>>>> 3c7f1d1a95b454f372f95415922fcf4b6099a8ee
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
<<<<<<< HEAD
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
=======
    MatListModule
>>>>>>> b118ffb48addf64f0c2fa214f6055f686bbc4fe9
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
