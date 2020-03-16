import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app.component';

// Services
import { UserService } from './services/user.service';

// Core
import { NavbarComponent } from './Core/navbar/navbar.component';
import { HomeComponent } from './Core/home/home.component';
import { FooterComponent } from './Core/footer/footer.component';
import { SubFooterComponent } from './Core/footer/sub-footer/sub-footer.component';
import { ErrorPageComponent } from './Core/error-page/error-page.component';

// Features
import { CommentComponent } from './Features/comment/comment.component';
import { DropdownComponent } from './Features/dropdown/dropdown.component';
import { OptionDropdownComponent } from './Features/dropdown/option-dropdown/option-dropdown.component';
import { FeatureItemComponent } from './Features/dropdown/feature-item/feature-item.component';
import { UserFeaturesComponent } from './Features/user-features/user-features.component';

// Components
import { CreatePostComponent } from './Components/cards/create-post/create-post.component';
import { PostCardComponent } from './Components/cards/post-card/post-card.component';
import { StartPostComponent } from './Components/cards/start-post/start-post.component';
import { WelcomeCardComponent } from './Components/cards/welcome-card/welcome-card.component';
import { ProfileCardsComponent } from './Components/cards/profile-cards/profile-cards.component';
import { FriendsCardComponent } from './Components/cards/friends-card/friends-card.component';
import { NetworkCardComponent } from './Components/cards/network-card/network-card.component';
import { NetworkSideNavComponent } from './Components/cards/network-side-nav/network-side-nav.component';

import { FormsComponent } from './Components/forms/forms.component';
import { SkillsFormComponent } from './Components/forms/skills-form/skills-form.component';
import { AddSkillsFormComponent } from './Components/forms/add-skills-form/add-skills-form.component';
import { EducationFormComponent } from './Components/forms/education-form/education-form.component';
import { ExperienceFormComponent } from './Components/forms/experience-form/experience-form.component';
import { OpportunitiesComponent } from './Components/forms/opportunities/opportunities.component';
import { IntroFormComponent } from './Components/forms/intro-form/intro-form.component';
import { AboutFormComponent } from './Components/forms/about-form/about-form.component';
import { CourseFormComponent } from './Components/forms/course-form/course-form.component';

import { RegestrationComponent } from './Components/Account/regestration/regestration.component';
import { SigninComponent } from './Components/Account/signin/signin.component';

import { ProfileComponent } from './Components/profile/profile.component';
import { NetworkComponent } from './Components/network/network.component';
import { ConnectionsComponent } from './components/network/connections/connections.component';

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
import { JobsComponent } from './components/jobs/jobs.component';
import { SearchComponent } from './components/search/search.component';
import { PeopleCardComponent } from './components/cards/people-card/people-card.component';
import { SearchCardSmComponent } from './components/cards/search-card-sm/search-card-sm.component';

@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    HomeComponent,
    FooterComponent,
    SubFooterComponent,
    ErrorPageComponent,

    CommentComponent,
    DropdownComponent,
    FeatureItemComponent,
    OptionDropdownComponent,
    UserFeaturesComponent,

    CreatePostComponent,
    PostCardComponent,
    StartPostComponent,
    WelcomeCardComponent,
    ProfileCardsComponent,
    FriendsCardComponent,
    NetworkCardComponent,
    NetworkSideNavComponent,

    FormsComponent,
    SkillsFormComponent,
    AddSkillsFormComponent,
    EducationFormComponent,
    ExperienceFormComponent,
    OpportunitiesComponent,
    IntroFormComponent,
    AboutFormComponent,
    CourseFormComponent,

    SigninComponent,
    RegestrationComponent,

    ProfileComponent,
    NetworkComponent,
    ConnectionsComponent,
    JobsComponent,
    SearchComponent,
    PeopleCardComponent,
    SearchCardSmComponent,
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
    MatExpansionModule,
    MatToolbarModule,
    MatChipsModule
  ],

  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
