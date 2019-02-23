import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})

export class LectureComponent implements OnInit {

  dataSource = LECTURE_DATA;
  columnsToDisplay = ['topic', 'date', 'slide'];
  expandedElement: Lecture | null;

  constructor() { }

  ngOnInit() {
    
  }

}

const LECTURE_DATA: Lecture[] = [
  {
    topic: 'Introduction',
    // Month is 0 based 0 -> Jan.
    date: new Date(2019, 1, 18),
    slideCondensed: 'https://github.com/koltpython/python-slides/raw/master/Lecture1/lecture1-condensed.pdf',
    slideFull: 'https://github.com/koltpython/python-slides/raw/master/Lecture1/lecture1.pdf',
    description: 'Start of the semester, program introduction, python installations and brief introduction of python variables, types and I/O.',
    image: 'https://www.python.org/static/opengraph-icon-200x200.png'
  },
  {
    topic: 'Basic Operators & Branching',
    date: new Date(2019, 1, 25),
    slideCondensed: 'https://github.com/koltpython/python-slides/raw/master/Lecture2/lecture2-condensed.pdf',
    slideFull: 'https://github.com/koltpython/python-slides/raw/master/Lecture2/lecture2.pdf',
    description: 'More detailed look into types and conversions, basic assignment, logical and numerical operations. Branching (if, elif, else) Brief introduction to strings.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9zkKK7vv32J9HI-vrOXwPKKngpPk-vcQMhZZAVolNfhJhl4apzw'
  }
];

export interface Lecture {
  topic: String,
  date: Date,
  slideCondensed: String,
  slideFull: String,
  description: String,
  image: String
}