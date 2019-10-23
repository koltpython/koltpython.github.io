import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment1AComponent } from './assignment1-a.component';

describe('Assignment1AComponent', () => {
  let component: Assignment1AComponent;
  let fixture: ComponentFixture<Assignment1AComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment1AComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment1AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
