import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  sections = [
    {
      name: 'Lectures',
      link: 'lectures'
    },
    {
      name: 'Sections',
      link: 'sections'
    },
    {
      name: 'Assignments',
      link: 'assignments'
    },
    {
      name: 'Resources',
      link: 'resources'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
