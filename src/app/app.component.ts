import { IdleMonitorService } from '@scullyio/ng-lib';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(private idle: IdleMonitorService) {}

  title = 'kolt-python-website';
}
