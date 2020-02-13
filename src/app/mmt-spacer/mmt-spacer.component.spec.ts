import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmtSpacerComponent } from './mmt-spacer.component';

describe('MmtSpacerComponent', () => {
  let component: MmtSpacerComponent;
  let fixture: ComponentFixture<MmtSpacerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmtSpacerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmtSpacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
