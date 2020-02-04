import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionRoutingModule } from './section-routing.module';
import { SectionComponent } from './section.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [SectionComponent],
  imports: [CommonModule, SectionRoutingModule, MaterialModule]
})
export class SectionModule {}
