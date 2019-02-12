import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { LectureComponent } from './lecture/lecture.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ContestsComponent } from './contests/contests.component';
import { ResourcesComponent } from './resources/resources.component';
import { ApplyComponent } from './apply/apply.component';

const routes: Routes = [
  { path:'', redirectTo:'apply', pathMatch: 'full'},
  { path:'lecture', component:LectureComponent },
  { path:'assignments', component:AssignmentsComponent },
  { path:'contests', component:ContestsComponent },
  { path:'resources', component:ResourcesComponent },
  { path:'apply', component:ApplyComponent },
  { path:'**', redirectTo:'apply'}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
