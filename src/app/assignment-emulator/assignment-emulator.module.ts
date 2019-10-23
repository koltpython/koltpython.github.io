import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentEmulatorRoutingModule } from './assignment-emulator-routing.module';
import { Assignment1AComponent } from './components/assignment1-a/assignment1-a.component';
import { MaterialModule } from '../material/material.module';
import { NgTerminalModule } from 'ng-terminal';

@NgModule({
  declarations: [Assignment1AComponent],
  imports: [CommonModule, AssignmentEmulatorRoutingModule, MaterialModule, NgTerminalModule]
})
export class AssignmentEmulatorModule {}
