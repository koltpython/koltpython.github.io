import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgTerminal } from 'ng-terminal';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-console-assignment',
  templateUrl: './console-assignment.component.html',
  styleUrls: ['./console-assignment.component.scss']
})
export class ConsoleAssignmentComponent implements OnInit, AfterViewInit {
  @ViewChild('term', { static: true }) terminal: NgTerminal;

  private lastInputSubject: Subject<string>;
  private lastInput: string;
  private lastLinePrintYPosition: number;
  private key: string;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this.lastInputSubject = new Subject<string>();
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.key = params.get('key');
    });
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

    switch (this.key) {
      case 'guacamole':
        this.assignment1A();
        break;
      case 'mayonnaise':
        this.assignment1B();
        break;
      case 'domates':
        this.assignment2A();
        break;
      default:
        this.invalidAssignmentKey();
        break;
    }
  }

  private async assignment1A(): Promise<void> {
    this.terminal.underlying.reset();
    this.printToTerminal('Welcome to the ultimatum bargaining game!');
    this.printToTerminal('This game has two players: The proposer and the responder');
    const total_amount = 10;
    this.printToTerminal(`The proposer is given $${total_amount}`);
    this.printToTerminal('Proposer decides how to split this amount between himself and the responder.');
    this.printToTerminal('Responder is informed of the proposed allocation.');
    this.printToTerminal('Responder decides whether to accept or reject the proposed allocation.');
    this.printToTerminal(
      'If the responder accepts, both proposer and responder receive payoffs according to the proposed allocation.'
    );
    this.printToTerminal('If the responder rejects, neither proposer nor responder receive any money.');

    this.printToTerminal("Let's start!");

    let offer = await this.takeInputFromTerminal(
      `Proposer, how much do you want to offer to the responder from $${total_amount}: `
    );
    while (isNaN(+offer) || +offer > total_amount || +offer < 0) {
      this.printToTerminal('Please enter a valid value!');
      offer = await this.takeInputFromTerminal(
        `Proposer, how much do you want to offer to the responder from $${total_amount}: `
      );
    }

    let answer = await this.takeInputFromTerminal(
      `Responder, do you accept the proposer's offer of taking $${offer} from $${total_amount}: `
    );
    while (answer !== 'yes' && answer !== 'no') {
      this.printToTerminal('Please enter a valid response! (yes or no)');
      answer = await this.takeInputFromTerminal(
        `Responder, do you accept the proposer's offer of taking $${offer} from $${total_amount}: `
      );
    }

    if (answer === 'yes') {
      this.printToTerminal(
        `The responder has accepted the offer, the proposer gets $${offer} and the responder gets $${total_amount -
          +offer}.`
      );
    } else {
      this.printToTerminal('The responder rejected the offer, both the proposer and the responder gets $0.');
    }

    await this.takeInputFromTerminal('Enter any value to restart the game: ');
    setTimeout(async () => await this.assignment1A());
  }

  private async assignment1B(): Promise<void> {
    this.terminal.underlying.reset();
    this.printToTerminal('Welcome to first price auction game!');
    this.printToTerminal('There are two bidders in this game.');
    this.printToTerminal(
      'Each bidder (Player A and Player B) is privately assigned a random "valuation" for the item between 1 and 10.'
    );
    this.printToTerminal('Their randomly assigned values are told to the players (privately).');
    this.printToTerminal('Players then privately submit their bids for the item.)');
    this.printToTerminal("Players can bid values in range [0, item's valuation] (inclusive).");
    this.printToTerminal("The winner is announced and also each player's payoff is calculated and printed.");

    const valuationA = this.getRandomInt(1, 11);
    const valuationB = this.getRandomInt(1, 11);

    const bidA = await this.assignment1BPlayerA(valuationA);
    const bidB = await this.assignment1BPlayerB(valuationB);

    if (bidA > bidB) {
      this.printToTerminal('Player A won the auction.');
      this.printToTerminal(`Player A received ${valuationA - bidA} payoff and Player B received 0 payoff.`);
    } else if (bidB > bidA) {
      this.printToTerminal('Player B won the auction.');
      this.printToTerminal(`Player B received ${valuationB - bidB} payoff and Player A received 0 payoff.`);
    } else {
      this.printToTerminal('Auction resulted in a draw.');
      this.printToTerminal('Both players received 0 payoff.');
    }

    await this.takeInputFromTerminal('Enter any value to restart the game: ');
    setTimeout(async () => await this.assignment1B());
  }

  private async assignment1BPlayerA(valuationA: number): Promise<number> {
    this.printToTerminal(`Player A, you are assigned the random valuation of ${valuationA}.`);
    let bidA = await this.takeInputFromTerminal('How much would you like to bid?: ');
    while (isNaN(+bidA) || +bidA > valuationA || +bidA < 0) {
      this.printToTerminal('Please enter a valid value!');
      bidA = await this.takeInputFromTerminal('How much would you like to bid?: ');
    }
    this.terminal.underlying.reset();
    return +bidA;
  }

  private async assignment1BPlayerB(valuationB: number): Promise<number> {
    this.printToTerminal(`Player B, you are assigned the random valuation of ${valuationB}.`);
    let bidB = await this.takeInputFromTerminal('How much would you like to bid?: ');
    while (isNaN(+bidB) || +bidB > valuationB || +bidB < 0) {
      this.printToTerminal('Please enter a valid value!');
      bidB = await this.takeInputFromTerminal('How much would you like to bid?: ');
    }
    this.terminal.underlying.reset();
    return +bidB;
  }

  private async assignment2A(): Promise<void> {
    this.terminal.underlying.reset();
    const players = ['AHMET', 'CEREN', 'GUL SENA', 'HASAN CAN'];
    this.printToTerminal(`Players in the game: \n${players.join(', ')}`);
    const numberOfRounds = 5;
    const amountReceived = 20;
    const rateOfReturn = 0.4;
    const contributions = new Object();
    const payoffs = new Object();

    for (let round = 0; round < numberOfRounds; round++) {
      let roundTotalContribution = 0;
      for (const player of players) {
        this.printToTerminal(`Each player is given $${amountReceived}`);

        let playerContribution = await this.takeInputFromTerminal(
          `Player ${player} how much do you like to contribute to the project: `
        );
        while (isNaN(+playerContribution) || +playerContribution > amountReceived || +playerContribution < 0) {
          this.printToTerminal('Please enter a valid value!');
          playerContribution = await this.takeInputFromTerminal(
            `Player ${player} how much do you like to contribute to the project: `
          );
        }
        roundTotalContribution += +playerContribution;

        this.terminal.underlying.reset();

        if (round === 0) {
          contributions[player] = [+playerContribution];
        } else {
          contributions[player].push(+playerContribution);
        }
      }

      for (const player of Object.keys(contributions)) {
        const contribution = contributions[player][round];
        this.printToTerminal(
          `${player} contributes ${contribution} to the water purification project.\n\t${player} receives$${amountReceived -
            contribution +
            roundTotalContribution * rateOfReturn} payoff.`
        );
      }

      this.printToTerminal(`The group receives a benefit of ${roundTotalContribution * rateOfReturn}`);
    }

    this.printToTerminal('Results are saved to a file named contributions.csv.');

    await this.takeInputFromTerminal('Enter any value to restart the game: ');
    setTimeout(async () => await this.assignment2A());
  }

  private invalidAssignmentKey(): void {
    this.terminal.underlying.reset();
    this.printToTerminal('You entered a wrong assignment key, please check the url.');
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

  // The maximum is exclusive and the minimum is inclusive
  private getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
