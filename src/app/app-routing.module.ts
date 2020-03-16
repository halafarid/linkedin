import { SearchComponent } from './components/search/search.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './Components/profile/profile.component';
import { AddSkillsFormComponent } from '../app/Components/forms/add-skills-form/add-skills-form.component';
import { EducationFormComponent } from '../app/Components/forms/education-form/education-form.component';
import { ExperienceFormComponent } from '../app/Components/forms/experience-form/experience-form.component';
import { OpportunitiesComponent } from '../app/Components/forms/opportunities/opportunities.component';
import { ErrorPageComponent } from './Core/error-page/error-page.component';
import { HomeComponent } from './Core/home/home.component';
import { SigninComponent } from './Components/Account/signin/signin.component';
import { RegestrationComponent } from './Components/Account/regestration/regestration.component';
import { NetworkComponent } from './Components/network/network.component';
import { SkillsFormComponent } from './Components/forms/skills-form/skills-form.component';
import { CreatePostComponent } from './Components/cards/create-post/create-post.component';
import { ConnectionsComponent } from './components/network/connections/connections.component';
import {JobsComponent } from './components/jobs/jobs.component';
import { AboutFormComponent } from './Components/forms/about-form/about-form.component';
import { CourseFormComponent } from './Components/forms/course-form/course-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'about', component: AboutFormComponent },
  { path: 'skills/addnew', component: AddSkillsFormComponent },
  { path: 'education/add', component: EducationFormComponent },
  { path: 'education/edit', component: EducationFormComponent },
  { path: 'experience/add', component: ExperienceFormComponent },
  { path: 'experience/edit', component: ExperienceFormComponent },
  { path: 'opportunities/add', component: OpportunitiesComponent },
  { path: 'courses/add', component: CourseFormComponent },
  { path: 'skills/add', component: SkillsFormComponent },
  { path: 'post/add', component: CreatePostComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'regestration', component: RegestrationComponent },
  { path: 'network', component: NetworkComponent },
  { path: 'network/connections', component: ConnectionsComponent },
  { path: 'jobs', component: JobsComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
