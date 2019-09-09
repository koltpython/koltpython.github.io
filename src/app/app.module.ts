import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './navbar/navbar.component';
import { LectureComponent } from './lecture/lecture.component';
import { OverviewComponent } from './overview/overview.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ResourcesComponent } from './resources/resources.component';
import { FooterComponent } from './footer/footer.component';
import { ApplyComponent } from './apply/apply.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LectureComponent,
    OverviewComponent,
    AssignmentsComponent,
    ResourcesComponent,
    FooterComponent,
    ApplyComponent,
    FeedbackComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
