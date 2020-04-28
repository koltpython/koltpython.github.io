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
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class LectureComponent implements OnInit {
  dataSource = LECTURE_DATA;
  columnsToDisplay = ['topic', 'date', 'slide', 'video'];
  expandedElement: Lecture | null;

  constructor() {}

  ngOnInit() {}
}

const LECTURE_DATA: Lecture[] = [
  {
    topic: 'Introduction',
    // Month is 0 based 0 -> Jan.
    date: new Date(2020, 0, 28),
    slideCondensed: 'https://github.com/koltpython/python-slides/raw/master/Lecture1/lecture1-condensed.pdf',
    slideFull: 'https://github.com/koltpython/python-slides/raw/master/Lecture1/lecture1.pdf',
    description:
      'Start of the semester, program introduction, Python installations and brief introduction of Python variables, types and I/O.',
  },
  {
    topic: 'Basic Operators, Branching & Simple Functions',
    date: new Date(2020, 1, 4),
    slideCondensed: 'https://github.com/koltpython/python-slides/raw/master/Lecture2/lecture2-condensed.pdf',
    slideFull: 'https://github.com/koltpython/python-slides/raw/master/Lecture2/lecture2.pdf',
    description:
      'More detailed look into types and conversions, basic assignment, logical and numerical operations. Branching (if, elif, else). Discussion about simple functions and how we should structure our code.',
  },
  {
    topic: 'While Loops, Turtle Graphics & Strings',
    date: new Date(2020, 1, 11),
    slideCondensed: 'https://github.com/koltpython/python-slides/raw/master/Lecture3/lecture3-condensed.pdf',
    slideFull: 'https://github.com/koltpython/python-slides/raw/master/Lecture3/lecture3.pdf',
    description:
      'Introduction to strings, indexing and slicing. While loops. Graphical loop examples using turtle module.',
  },
  {
    topic: 'Lists & For Loops',
    date: new Date(2020, 1, 18),
    slideCondensed: 'https://github.com/koltpython/python-slides/raw/master/Lecture4/lecture4-condensed.pdf',
    slideFull: 'https://github.com/koltpython/python-slides/raw/master/Lecture4/lecture4.pdf',
    description:
      'Lists, detailed look into list methods and ways to mutate lists. Discussion about ranges, for loops, break and continue statements.',
  },
  {
    topic: 'Functions',
    date: new Date(2020, 1, 25),
    slideCondensed: 'https://github.com/koltpython/python-slides/raw/master/Lecture5/lecture5-condensed.pdf',
    slideFull: 'https://github.com/koltpython/python-slides/raw/master/Lecture5/lecture5.pdf',
    description:
      'Detailed look into Python functions. Discussion about parameters, return type, default parameters, variadic positional arguments, local and global variables.',
  },
  {
    topic: 'Containers, Aliasing & Mutability',
    date: new Date(2020, 2, 3),
    slideCondensed: 'https://github.com/koltpython/python-slides/raw/master/Lecture6/lecture6-condensed.pdf',
    slideFull: 'https://github.com/koltpython/python-slides/raw/master/Lecture6/lecture6.pdf',
    description:
      'More detailed look into Python data and memory model. Discussion about aliasing and cloning. List, Tuple, Set and Dictionary types and differences between them. Comparison between reassigning and mutation.',
  },
  {
    topic: 'Error & Exception Handling, File Input and Output',
    date: new Date(2020, 2, 10),
    slideCondensed: 'https://github.com/koltpython/python-slides/raw/master/Lecture7/lecture7-condensed.pdf',
    slideFull: 'https://github.com/koltpython/python-slides/raw/master/Lecture7/lecture7.pdf',
    description: 'Standard file input and output in Python. Discussion about Exceptions and how to handle them.',
  },
  {
    topic: 'Python Modules and Third-Party Packages',
    date: new Date(2020, 3, 7),
    slideFull: 'https://github.com/koltpython/python-slides/raw/master/Lecture8/lecture8.pdf',
    slideCondensed: 'https://github.com/koltpython/python-slides/raw/master/Lecture8/lecture8-condensed.pdf',
    description:
      'Python modules and packages. Python Package Index(PyPI) and Package Installer for Python (pip). Installing and using third party packages using pip. Virtual environments (venv).',
    video: 'https://drive.google.com/drive/folders/1RIltTZ1hBG6XE52p_8efyw-_BLtiPVCy?usp=sharing',
  },
  {
    topic: 'Workshop: pandas & Matplotlib',
    date: new Date(2019, 3, 20),
    slideFull: 'https://github.com/koltpython/python-workshops/tree/master/4-Introduction-to-Pandas-and-Matplotlib',
    slideCondensed:
      'https://github.com/koltpython/python-workshops/tree/master/4-Introduction-to-Pandas-and-Matplotlib',
    description:
      'This workshop aims to show how Python can be used for data science. In this workshop, we will examine the USA Covid-19 data with the tools provided by pandas and matplotlib packages.',
    video: 'https://drive.google.com/drive/folders/17FeApakVTktj41pJcpgdbLjUKMFc4muo?usp=sharing',
  },
  // {
  //   topic: 'Workshop: APIs & Data Visualization',
  //   date: new Date(2019, 11, 9),
  //   slideFull: 'https://github.com/koltpython/python-workshops/tree/master/2-APIs-and-Data-Visualization',
  //   slideCondensed: 'https://github.com/koltpython/python-workshops/tree/master/2-APIs-and-Data-Visualization',
  //   description:
  //     'This workshop provides a sample of how you can use Python to collect and visualize data from the internet. We will utilize the requests package to collect data from Instagram APIs and use the data we gathered to create visual charts.',
  //   image: ''
  // }
];

export interface Lecture {
  topic: string;
  date: Date;
  slideCondensed: string;
  slideFull: string;
  description: string;
  image?: string;
  video?: string;
}
