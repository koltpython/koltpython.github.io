import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Assignment1AComponent } from './components/assignment1-a/assignment1-a.component';

const routes: Routes = [
  {
    path: 'assignment1a',
    component: Assignment1AComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentEmulatorRoutingModule {}
