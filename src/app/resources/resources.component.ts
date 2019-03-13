import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  resourcesDataSource = RESOURCES_DATA;
  columnsToDisplay = ['no', 'title', 'credit'];

  constructor() {}

  ngOnInit() {}
}

const RESOURCES_DATA: Resource[] = [
  {
    no: 1,
    title: 'Course Information',
    credit: 'Ahmet',
    url: 'https://docs.google.com/document/d/1nrqoCj7lOUvSF4vRolViWYRlRS1VZvmAHFfiLfN2mMU/'
  },
  {
    no: 2,
    title: 'Tentative Schedule',
    credit: 'İpek',
    url: 'https://drive.google.com/file/d/1zFCj0Lq_8f0m7uu-svCyh0XcKgPvXQ81'
  },
  {
    no: 3,
    title: 'Python Installation',
    credit: 'Django Girls',
    url: 'https://tutorial.djangogirls.org/en/python_installation/'
  },
  {
    no: 4,
    title: 'Python in VS Code',
    credit: 'Microsoft',
    url: 'https://code.visualstudio.com/docs/languages/python'
  },
  {
    no: 5,
    title: 'Introduction to Command Line',
    credit: 'Django Girls',
    url: 'https://tutorial.djangogirls.org/en/intro_to_command_line/'
  },
  {
    no: 6,
    title: 'The Python Language Reference',
    credit: 'Python Software Foundation',
    url: 'https://docs.python.org/3/reference/'
  },
  {
    no: 7,
    title: 'The Python Standard Library',
    credit: 'Python Software Foundation',
    url: 'https://docs.python.org/3/library/'
  },
  {
    no: 8,
    title: 'PEP 8: Style Guide for Python Code',
    credit: 'Guido van Rossum',
    url: 'https://www.python.org/dev/peps/pep-0008/'
  },
  {
    no: 9,
    title: 'Awesome Python frameworks, libraries, software and resources',
    credit: 'Vinta Chen',
    url: 'https://awesome-python.com/'
  },
  {
    no: 10,
    title: 'Python Tutor',
    credit: 'Phillip Guo',
    url: 'http://pythontutor.com/visualize.html#mode=edit'
  },
  {
    no: 11,
    title: 'Ready for Readable Code?',
    credit: 'John Papa',
    url: 'https://www.youtube.com/watch?v=56mETnrByBM'
  }
];

export interface Resource {
  no: number;
  title: String;
  credit: String;
  url: String;
}
