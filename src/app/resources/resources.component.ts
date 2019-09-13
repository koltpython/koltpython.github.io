import { Component, OnInit } from '@angular/core';

interface Resource {
  title: String;
  credit: String;
  url: String;
}

const RESOURCES_DATA: Resource[] = [
  {
    title: 'Course Information',
    credit: 'Ahmet, Ceren, Gül Sena, Hasan Can',
    url: 'https://docs.google.com/document/d/1aRPgNOht1QBMnwcQpvt2mAwUF19dPFZS5RKIWYocmnY/'
  },
  // {
  //   title: 'Tentative Schedule',
  //   credit: 'İpek',
  //   url: 'https://drive.google.com/file/d/1zFCj0Lq_8f0m7uu-svCyh0XcKgPvXQ81'
  // },
  {
    title: 'Python Installation',
    credit: 'Django Girls',
    url: 'https://tutorial.djangogirls.org/en/python_installation/'
  },
  {
    title: 'Python in VS Code',
    credit: 'Microsoft',
    url: 'https://code.visualstudio.com/docs/languages/python'
  },
  {
    title: 'The Python Tutorial',
    credit: 'Python Software Foundation',
    url: 'https://docs.python.org/3/tutorial/'
  },
  {
    title: 'The Python Standard Library',
    credit: 'Python Software Foundation',
    url: 'https://docs.python.org/3/library/'
  },
  {
    title: 'The Python Language Reference',
    credit: 'Python Software Foundation',
    url: 'https://docs.python.org/3/reference/'
  },
  {
    title: 'PEP 8: Style Guide for Python Code',
    credit: 'Guido van Rossum',
    url: 'https://www.python.org/dev/peps/pep-0008/'
  },
  {
    title: 'Python Tutor',
    credit: 'Phillip Guo',
    url: 'http://pythontutor.com/visualize.html#mode=edit'
  },
  {
    title: 'Awesome Python frameworks, libraries, software and resources',
    credit: 'Vinta Chen',
    url: 'https://awesome-python.com/'
  },
  {
    title: 'Introduction to Command Line',
    credit: 'Django Girls',
    url: 'https://tutorial.djangogirls.org/en/intro_to_command_line/'
  },
  {
    title: 'Ready for Readable Code?',
    credit: 'John Papa',
    url: 'https://www.youtube.com/watch?v=56mETnrByBM'
  },
  {
    title: 'Facts and Myths about Python names and values',
    credit: 'Ned Batchelder',
    url: 'https://www.youtube.com/watch?v=_AEJHKGk9ns'
  }
];

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
