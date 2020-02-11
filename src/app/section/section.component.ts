import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  dataSource = SECTION_DATA;
  columnsToDisplay = ['topic', 'date', 'handout', 'starter', 'solution'];
  constructor() {}

  ngOnInit() {}
}

const SECTION_DATA: Section[] = [
  {
    topic: 'Variables, Console I/O & Branching',
    date: new Date(2020, 1, 5),
    handout: 'https://github.com/koltpython/python-exercises-spring2020/raw/master/section1/section1.pdf',
    starter:
      'https://kinolien.github.io/gitzip/?download=koltpython/python-exercises-spring2020/tree/master/section1/starter',
    solution:
      'https://kinolien.github.io/gitzip/?download=koltpython/python-exercises-spring2020/tree/master/section1/solution'
  },
  {
    topic: 'While Loops, Turtle Graphics & Strings',
    date: new Date(2020, 1, 12),
    handout: 'https://github.com/koltpython/python-exercises-spring2020/raw/master/section2/section2.pdf',
    starter:
      'https://kinolien.github.io/gitzip/?download=koltpython/python-exercises-spring2020/tree/master/section2/starter',
    solution:
      'https://kinolien.github.io/gitzip/?download=koltpython/python-exercises-spring2020/tree/master/section2/solution'
  }
];

export interface Section {
  topic: string;
  date: Date;
  handout: string;
  starter: string;
  solution: string;
}
