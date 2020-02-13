import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmtQuestionTextareaComponent } from './mmt-question-textarea.component';

describe('MmtQuestionTextareaComponent', () => {
  let component: MmtQuestionTextareaComponent;
  let fixture: ComponentFixture<MmtQuestionTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmtQuestionTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmtQuestionTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
