import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsoleAssignmentComponent } from './components/console-assignment/console-assignment.component';

const routes: Routes = [
  {
    path: ':key',
    component: ConsoleAssignmentComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentEmulatorRoutingModule {}
