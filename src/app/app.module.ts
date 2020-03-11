import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { NetworkComponent } from './network/network.component';

import { CardsComponent } from './cards/home-card/cards.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { WelcomeCardComponent } from './cards/welcome-card/welcome-card.component';
import { StartPostComponent } from './cards/start-post/start-post.component';
import { CreatePostComponent } from './cards/create-post/create-post.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsComponent } from './forms/forms.component';
import { PostCardComponent } from './cards/post-card/post-card.component';
import { OptionDropdownComponent } from './option-dropdown/option-dropdown.component';

import { FooterComponent } from './footer/footer.component';

import { RegestrationComponent } from './components/regestration/regestration.component';
import { SigninComponent } from './components/signin/signin.component';
import { CommentComponent } from './comment/comment.component';
import { SkillsFormComponent } from './forms/skills-form/skills-form.component';
import { EducationFormComponent } from './forms/education-form/education-form.component';
import { ExperienceFormComponent } from './forms/experience-form/experience-form.component';

import { FeatureItemComponent } from './components/feature-item/feature-item.component';
import { UserFeaturesComponent } from './components/user-features/user-features.component';
import { from } from 'rxjs';

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
  MatToolbarModule,
  MatChipsModule,
} from '@angular/material';
import { AddSkillsFormComponent } from './forms/add-skills-form/add-skills-form.component';

import { OpportunitiesComponent } from './forms/opportunities/opportunities.component';
import { NetworkCardComponent } from './cards/network-card/network-card.component';
import { NetworkSideNavComponent } from './cards/network-side-nav/network-side-nav.component';
// import { NavbarComponent } from './shared/navbar/navbar.component';

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
    FormsComponent,
    FooterComponent,
    RegestrationComponent,
    SigninComponent,

    PostCardComponent,
    OptionDropdownComponent,
    CommentComponent,
    UserFeaturesComponent,
    FeatureItemComponent,

    SkillsFormComponent,
    EducationFormComponent,
    ExperienceFormComponent,
    AddSkillsFormComponent,
    OpportunitiesComponent,
    NetworkCardComponent,
    NetworkSideNavComponent,
    // NavbarComponent,
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
    MatCheckboxModule,
    ReactiveFormsModule,
    MatListModule,
    MatExpansionModule,

    MatFormFieldModule,
    MatSlideToggleModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
