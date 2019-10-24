import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentEmulatorRoutingModule } from './assignment-emulator-routing.module';
import { ConsoleAssignmentComponent } from './components/console-assignment/console-assignment.component';
import { MaterialModule } from '../material/material.module';
import { NgTerminalModule } from 'ng-terminal';

@NgModule({
  declarations: [ConsoleAssignmentComponent],
  imports: [CommonModule, AssignmentEmulatorRoutingModule, MaterialModule, NgTerminalModule]
})
export class AssignmentEmulatorModule {}
