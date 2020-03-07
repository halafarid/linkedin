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
  MatInputModule
} from '@angular/material';

import { CardsComponent } from './cards/cards.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ProfileComponent } from './profile/profile.component';
import { RegestrationComponent } from './components/regestration/regestration.component';
import { SigninComponent } from './components/signin/signin.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    DropdownComponent,
    ProfileComponent,
    RegestrationComponent,
    SigninComponent
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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
