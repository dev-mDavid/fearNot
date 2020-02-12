import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FearnotExerciseComponent } from './fearnot-exercise.component';

describe('FearnotExerciseComponent', () => {
  let component: FearnotExerciseComponent;
  let fixture: ComponentFixture<FearnotExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FearnotExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FearnotExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
