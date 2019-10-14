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
    date: new Date(2019, 8, 23),
    slideCondensed: 'https://github.com/koltpython/python-slides/raw/master/Lecture1/lecture1-condensed.pdf',
    slideFull: 'https://github.com/koltpython/python-slides/raw/master/Lecture1/lecture1.pdf',
    description:
      'Start of the semester, program introduction, Python installations and brief introduction of Python variables, types and I/O.',
    image: ''
  },
  {
    topic: 'Basic Operators & Branching',
    date: new Date(2019, 8, 30),
    slideCondensed: 'https://github.com/koltpython/python-slides/raw/master/Lecture2/lecture2-condensed.pdf',
    slideFull: 'https://github.com/koltpython/python-slides/raw/master/Lecture2/lecture2.pdf',
    description:
      'More detailed look into types and conversions, basic assignment, logical and numerical operations. Branching (if, elif, else).',
    image: ''
  },
  {
    topic: 'Strings, While Loops & Lists',
    date: new Date(2019, 9, 7),
    slideCondensed: 'https://github.com/koltpython/python-slides/raw/master/Lecture3/lecture3-condensed.pdf',
    slideFull: 'https://github.com/koltpython/python-slides/raw/master/Lecture3/lecture3.pdf',
    description: 'Introduction to lists and basic list operations, slicing lists, strings and while loops.',
    image: ''
  },
  {
    topic: 'Lists (Cont.), For Loops & Functions',
    date: new Date(2019, 9, 7),
    slideCondensed: 'https://github.com/koltpython/python-slides/raw/master/Lecture4/lecture4-condensed.pdf',
    slideFull: 'https://github.com/koltpython/python-slides/raw/master/Lecture4/lecture4.pdf',
    description:
      'Lists continued. Discussion about ranges, for loops, break and continue statements. Detailed look into Python functions. Discussion about parameters, return type, default parameters, variadic positional arguments, local and global variables.',
    image: ''
  }
  // {
  //   topic: 'Containers, Aliasing & Mutability',
  //   date: new Date(2019, 2, 18),
  //   slideCondensed: 'https://github.com/koltpython/python-slides/raw/master/Lecture5/lecture5-condensed.pdf',
  //   slideFull: 'https://github.com/koltpython/python-slides/raw/master/Lecture5/lecture5.pdf',
  //   description:
  //     'More detailed look into Python data and memory model. Discussion about aliasing and cloning. List, Tuple, Set and Dictionary types and differences between them. Comparison between reassigning and mutation.',
  //   image: ''
  // },
  // {
  //   topic: 'File I/O, Testing & Debugging',
  //   date: new Date(2019, 2, 25),
  //   slideCondensed: 'https://github.com/koltpython/python-slides/raw/master/Lecture6/lecture6-condensed.pdf',
  //   slideFull: 'https://github.com/koltpython/python-slides/raw/master/Lecture6/lecture6.pdf',
  //   description:
  //     'Standard file input and output in Python. Discussion about Exceptions and how to handle them. Debugging tool in VS Code.',
  //   image: ''
  // },
  // {
  //   topic: 'Error/Exception Handling, Object Oriented Programming',
  //   date: new Date(2019, 3, 1),
  //   slideCondensed: 'https://github.com/koltpython/python-slides/raw/master/Lecture7/lecture7_condensed.pdf',
  //   slideFull: 'https://github.com/koltpython/python-slides/raw/master/Lecture7/lecture7.pdf',
  //   description:
  //     'Error and exception handling in python with try except finally blocks. Discussion about classes and Object Oriented Programming, brief introduction to inheritance and method overloading.',
  //   image: ''
  // },
  // {
  //   topic: 'Third Party Packages',
  //   date: new Date(2019, 3, 22),
  //   slideCondensed: 'https://github.com/koltpython/python-slides/raw/master/Lecture8/lecture8_condensed.pdf',
  //   slideFull: 'https://github.com/koltpython/python-slides/raw/master/Lecture8/lecture8.pdf',
  //   description:
  //     'Installing and using third party packages using pip. Example solution to a real life problem. Announcement of final projects.',
  //   image: ''
  // }
];

export interface Lecture {
  topic: String;
  date: Date;
  slideCondensed: String;
  slideFull: String;
  description: String;
  image: String;
}
