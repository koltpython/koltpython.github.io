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
    topic: 'Strings, While Loops & Introduction to Lists',
    date: new Date(2019, 9, 7),
    slideCondensed: 'https://github.com/koltpython/python-slides/raw/master/Lecture3/lecture3-condensed.pdf',
    slideFull: 'https://github.com/koltpython/python-slides/raw/master/Lecture3/lecture3.pdf',
    description: 'Introduction to lists and basic list operations, slicing lists, strings and while loops.',
    image: ''
  },
  {
    topic: 'Lists Continued, For Loops',
    date: new Date(2019, 9, 14),
    slideCondensed: 'https://github.com/koltpython/python-slides/raw/master/Lecture4/lecture4-condensed.pdf',
    slideFull: 'https://github.com/koltpython/python-slides/raw/master/Lecture4/lecture4.pdf',
    description:
      'Lists continued. More detailed look into list methods and ways to mutate lists. Discussion about ranges, for loops, break and continue statements.',
    image: ''
  },
  {
    topic: 'Functions',
    date: new Date(2019, 9, 21),
    slideCondensed: null,
    slideFull: null,
    description:
      'Detailed look into Python functions. Discussion about parameters, return type, default parameters, variadic positional arguments, local and global variables.',
    image: ''
  },
  {
    topic: 'Holiday (Republic Day)',
    date: new Date(2019, 9, 28),
    slideCondensed: null,
    slideFull: null,
    description: '',
    image: ''
  },
  {
    topic: 'Containers, Aliasing & Mutability',
    date: new Date(2019, 10, 4),
    slideCondensed: null,
    slideFull: null,
    description:
      'More detailed look into Python data and memory model. Discussion about aliasing and cloning. List, Tuple, Set and Dictionary types and differences between them. Comparison between reassigning and mutation.',
    image: ''
  },
  {
    topic: 'Error & Exception Handling, File Input and Output',
    date: new Date(2019, 10, 11),
    slideCondensed: null,
    slideFull: null,
    description: 'Standard file input and output in Python. Discussion about Exceptions and how to handle them.',
    image: ''
  },
  {
    topic: 'Using Third Party Packages',
    date: new Date(2019, 10, 18),
    slideCondensed: null,
    slideFull: null,
    description:
      'Python Package Index(PyPI) and Package Installer for Python (pip). Installing and using third party packages using pip. Example solution to a real life problem.',
    image: ''
  },
  {
    topic: 'TBD',
    date: new Date(2019, 10, 25),
    slideFull: null,
    slideCondensed: null,
    description: '',
    image: ''
  },
  {
    topic: 'TBD',
    date: new Date(2019, 11, 2),
    slideFull: null,
    slideCondensed: null,
    description: '',
    image: ''
  },
  {
    topic: 'TBD',
    date: new Date(2019, 11, 9),
    slideFull: null,
    slideCondensed: null,
    description: '',
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
