import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [MatTableModule, MatTabsModule, MatButtonModule, MatToolbarModule, MatCardModule, MatIconModule],
  exports: [MatTableModule, MatTabsModule, MatButtonModule, MatToolbarModule, MatCardModule, MatIconModule]
})
export class MaterialModule {}
