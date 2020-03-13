import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './Components/profile/profile.component';
import { AddSkillsFormComponent } from '../app/Components/forms/add-skills-form/add-skills-form.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/skills/add', component: AddSkillsFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
