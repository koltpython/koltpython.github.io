import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgTerminal } from 'ng-terminal';

@Component({
  selector: 'app-assignment1-a',
  templateUrl: './assignment1-a.component.html',
  styleUrls: ['./assignment1-a.component.scss']
})
export class Assignment1AComponent implements OnInit, AfterViewInit {
  @ViewChild('term', { static: true }) child: NgTerminal;
  lastInput: string;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.lastInput = '';
    this.child.keyEventInput.subscribe(e => {
      const ev = e.domEvent;
      const printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey;
      console.log(ev);
      if (ev.key === 'Enter') {
        this.child.write('\r\n');
      } else if (ev.key === 'Backspace') {
        // Do not delete the prompt
        if (this.child.underlying.buffer.cursorX > 2) {
          this.child.write('\b \b');
        }
      } else if (printable) {
        this.child.write(e.key);
      }
    });
  }
}
