import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LectureComponent } from './lecture/lecture.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ResourcesComponent } from './resources/resources.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'lectures', component: LectureComponent },
  { path: 'sections', loadChildren: () => import('./section/section.module').then(m => m.SectionModule) },
  { path: 'assignments', component: AssignmentsComponent },
  {
    path: 'assignments/demo',
    loadChildren: () => import('./assignment-emulator/assignment-emulator.module').then(m => m.AssignmentEmulatorModule)
  },
  { path: 'resources', component: ResourcesComponent },
  { path: 'apply', loadChildren: () => import('./apply/apply.module').then(m => m.ApplyModule) },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'alumni', loadChildren: () => import('./alumni/alumni.module').then(m => m.AlumniModule) },
  { path: 'team', loadChildren: () => import('./team/team.module').then(m => m.TeamModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
