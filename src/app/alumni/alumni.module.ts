import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumniComponent } from './alumni.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AlumniComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: AlumniComponent }])]
})
export class AlumniModule {}
