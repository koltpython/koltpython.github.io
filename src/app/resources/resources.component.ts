import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  resourcesDataSource = RESOURCES_DATA;
  columnsToDisplay = ['no', 'title', 'credit'];

  constructor() { }

  ngOnInit() {
  }

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
  }
]


export interface Resource {
  no: number,
  title: String,
  credit: String,
  url: String
}