import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleAssignmentComponent } from './console-assignment';

describe('Assignment1AComponent', () => {
  let component: ConsoleAssignmentComponent;
  let fixture: ComponentFixture<ConsoleAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleAssignmentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
