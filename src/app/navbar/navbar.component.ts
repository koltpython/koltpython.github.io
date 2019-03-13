import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  sections = [
    {
      name: 'Lecture',
      link: 'lecture'
    },
    {
      name: 'Assignments',
      link: 'assignments'
    },
    {
      name: 'Contests',
      link: 'contests'
    },
    {
      name: 'Resources',
      link: 'resources'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
