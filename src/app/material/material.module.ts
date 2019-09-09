import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [MatTableModule, MatTabsModule, MatButtonModule, MatToolbarModule, MatCardModule],
  exports: [MatTableModule, MatTabsModule, MatButtonModule, MatToolbarModule, MatCardModule]
})
export class MaterialModule {}
