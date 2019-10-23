import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgTerminal } from 'ng-terminal';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-assignment1-a',
  templateUrl: './assignment1-a.component.html',
  styleUrls: ['./assignment1-a.component.scss']
})
export class Assignment1AComponent implements OnInit, AfterViewInit {
  @ViewChild('term', { static: true }) terminal: NgTerminal;

  private lastInputSubject: Subject<string>;
  private lastInput: string;
  private lastLinePrintYPosition: number;

  constructor() {}

  ngOnInit() {
    this.lastInputSubject = new Subject<string>();
  }

  ngAfterViewInit() {
    this.lastInput = '';
    this.lastLinePrintYPosition = 0;
    this.terminal.keyEventInput.subscribe(e => {
      const ev = e.domEvent;
      const printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey;
      if (ev.key === 'ArrowUp' || ev.key === 'ArrowDown' || ev.key === 'ArrowLeft' || ev.key === 'ArrowRight') {
        // arrow keys are not allowed
      } else if (ev.key === 'Enter') {
        this.terminal.write('\r\n');
        this.lastInputSubject.next(this.lastInput);
        this.lastInput = '';
        this.lastLinePrintYPosition = 0;
      } else if (ev.key === 'Backspace') {
        if (this.terminal.underlying.buffer.cursorX > this.lastLinePrintYPosition) {
          this.terminal.write('\b \b');
          this.lastInput = this.lastInput.substring(0, this.lastInput.length - 1);
        }
      } else if (printable) {
        this.terminal.write(e.key);

        if (ev.key.length === 1) {
          this.lastInput += ev.key;
        }
      }
    });
    this.assignment1A();
  }

  private async assignment1A(): Promise<void> {
    this.printToTerminal('Welcome to Ultimatum Game!');
    this.printToTerminal('Ultimatum Game has Two Characters: The Proposer & The Responder');
    const total_amount = 10;
    this.printToTerminal(`Proposer has given ${total_amount}`);
    this.printToTerminal('Proposer decides how to split this amount between himself and the responder');
    this.printToTerminal(
      'Responder is informed of the proposed allocation and asked to decide between accepting and rejecting this allocation.'
    );
    this.printToTerminal(
      'If the responder accepts this allocation both proposer and responder receives payoffs according to allocation.'
    );
    this.printToTerminal('If the responder rejects this allocation neither proposer nor receiver gets any payoff.');

    this.printToTerminal("LET'S START!");

    let input = await this.takeInputFromTerminal('Please enter a number: ');
    while (input !== 'stop') {
      input = await this.takeInputFromTerminal('Please enter a number: ');
    }
  }

  private printToTerminal(message: string, end: string = '\r\n'): void {
    this.terminal.write(message + end);
    setTimeout(() => (this.lastLinePrintYPosition = this.terminal.underlying.buffer.cursorX));
  }

  private async takeInputFromTerminal(prompt: string): Promise<string> {
    if (prompt) {
      this.printToTerminal(prompt, '');
    }
    return this.lastInputSubject.pipe(take(1)).toPromise();
  }
}
