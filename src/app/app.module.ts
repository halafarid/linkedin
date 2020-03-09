import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatListModule,
  MatSlideToggleModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatTabGroup
} from "@angular/material";

import { NetworkComponent } from "./network/network.component";

import { CardsComponent } from "./cards/home-card/cards.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { WelcomeCardComponent } from "./cards/welcome-card/welcome-card.component";
import { StartPostComponent } from "./cards/start-post/start-post.component";
import { CreatePostComponent } from "./cards/create-post/create-post.component";
import { ProfileComponent } from "./profile/profile.component";
import { FormsComponent } from "./forms/forms.component";
import { PostCardComponent } from "./cards/post-card/post-card.component";
import { OptionDropdownComponent } from "./option-dropdown/option-dropdown.component";

import { FooterComponent } from "./footer/footer.component";

import { RegestrationComponent } from "./components/regestration/regestration.component";
import { SigninComponent } from "./components/signin/signin.component";
import { from } from "rxjs";
import { CommentComponent } from "./comment/comment.component";
import { SkillsFormComponent } from "./forms/skills-form/skills-form.component";
import { EducationFormComponent } from "./forms/education-form/education-form.component";
import { ExperienceFormComponent } from "./forms/experience-form/experience-form.component";

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    DropdownComponent,
    ProfileComponent,
    NetworkComponent,

    WelcomeCardComponent,
    StartPostComponent,
    CreatePostComponent,
    ProfileComponent,
    FormsComponent,
    FooterComponent,

    RegestrationComponent,
    SigninComponent,

    PostCardComponent,
    OptionDropdownComponent,
    ProfileComponent,
    CommentComponent,

    SkillsFormComponent,
    EducationFormComponent,
    ExperienceFormComponent
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
    MatSlideToggleModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatListModule,
    MatCheckboxModule,
    MatListModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatIconModule,
    MatInputModule,
    MatTabGroup,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
