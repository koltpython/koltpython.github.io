import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { LectureComponent } from './lecture/lecture.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ResourcesComponent } from './resources/resources.component';
import { ApplyComponent } from './apply/apply.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  { path: '', redirectTo: 'lectures', pathMatch: 'full' },
  { path: 'lectures', component: LectureComponent },
  { path: 'assignments', component: AssignmentsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'apply', component: ApplyComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: '**', redirectTo: 'lectures' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
