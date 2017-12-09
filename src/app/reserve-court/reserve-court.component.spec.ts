import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveCourtComponent } from './reserve-court.component';

describe('ReserveCourtComponent', () => {
  let component: ReserveCourtComponent;
  let fixture: ComponentFixture<ReserveCourtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveCourtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveCourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
