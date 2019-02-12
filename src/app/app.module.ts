import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LectureComponent } from './lecture/lecture.component';
import { OverviewComponent } from './overview/overview.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ContestsComponent } from './contests/contests.component';
import { ResourcesComponent } from './resources/resources.component';
import { FooterComponent } from './footer/footer.component';
import { ApplyComponent } from './apply/apply.component';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LectureComponent,
    OverviewComponent,
    AssignmentsComponent,
    ContestsComponent,
    ResourcesComponent,
    FooterComponent,
    ApplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTabsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
