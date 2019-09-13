import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TeamComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: TeamComponent }])]
})
export class TeamModule {}
