import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  sections = [
    {
      name: 'Lectures',
      link: 'lectures'
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
