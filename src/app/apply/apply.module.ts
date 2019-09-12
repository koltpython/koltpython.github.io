import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyComponent } from './apply.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ApplyComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild([{ path: '', component: ApplyComponent }])]
})
export class ApplyModule {}
