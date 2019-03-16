import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class LectureComponent implements OnInit {
  dataSource = LECTURE_DATA;
  columnsToDisplay = ['topic', 'date', 'slide'];
  expandedElement: Lecture | null;

  constructor() {}

  ngOnInit() {}
}

const LECTURE_DATA: Lecture[] = [
  {
    topic: 'Introduction',
    // Month is 0 based 0 -> Jan.
    date: new Date(2019, 1, 18),
    slideCondensed: 'https://github.com/koltpython/python-slides/raw/master/Lecture1/lecture1-condensed.pdf',
    slideFull: 'https://github.com/koltpython/python-slides/raw/master/Lecture1/lecture1.pdf',
    description:
      'Start of the semester, program introduction, python installations and brief introduction of python variables, types and I/O.',
    image: ''
  },
  {
    topic: 'Basic Operators & Branching',
    date: new Date(2019, 1, 25),
    slideCondensed: 'https://github.com/koltpython/python-slides/raw/master/Lecture2/lecture2-condensed.pdf',
    slideFull: 'https://github.com/koltpython/python-slides/raw/master/Lecture2/lecture2.pdf',
    description:
      'More detailed look into types and conversions, basic assignment, logical and numerical operations. Branching (if, elif, else).',
    image: ''
  },
  {
    topic: 'Lists, Strings & Loops',
    date: new Date(2019, 2, 4),
    slideCondensed: 'https://github.com/koltpython/python-slides/raw/master/Lecture3/lecture3-condensed.pdf',
    slideFull: 'https://github.com/koltpython/python-slides/raw/master/Lecture3/lecture3.pdf',
    description:
      "Introduction to lists and basic list operations, slicing lists and strings. Usage of 'in' operator, while and for loops. Break, continue and pass statements.",
    image: ''
  },
  {
    topic: 'Functions',
    date: new Date(2019, 2, 11),
    slideCondensed: 'https://github.com/koltpython/python-slides/raw/master/Lecture4/lecture4-condensed.pdf',
    slideFull: 'https://github.com/koltpython/python-slides/raw/master/Lecture4/lecture4.pdf',
    description:
      'Detailed look into Python functions. Discussion about parameters, return type, default parameters, variadic positional arguments, local and global variables. Introduction to lambda functions.',
    image: ''
  },
  {
    topic: 'Containers, Aliasing & Mutability',
    date: new Date(2019, 2, 11),
    slideCondensed: 'https://github.com/koltpython/python-slides/raw/master/Lecture5/lecture5-condensed.pdf',
    slideFull: 'https://github.com/koltpython/python-slides/raw/master/Lecture5/lecture5.pdf',
    description:
      'More detailed look into Python data and memory model. Discussion about aliasing and cloning. List, Tuple, Set and Dictionary types and differences between them. Comparison between reassigning and mutation.',
    image: ''
  }
];

export interface Lecture {
  topic: String;
  date: Date;
  slideCondensed: String;
  slideFull: String;
  description: String;
  image: String;
}
