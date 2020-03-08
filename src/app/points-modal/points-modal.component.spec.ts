import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsModalComponent } from './points-modal.component';

describe('PointsModalComponent', () => {
  let component: PointsModalComponent;
  let fixture: ComponentFixture<PointsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
