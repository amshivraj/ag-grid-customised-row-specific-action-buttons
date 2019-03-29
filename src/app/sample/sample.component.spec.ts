import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupHoldReleaseReasonComponent } from './popup-hold-release-reason.component';

describe('PopupHoldReleaseReasonComponent', () => {
  let component: PopupHoldReleaseReasonComponent;
  let fixture: ComponentFixture<PopupHoldReleaseReasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupHoldReleaseReasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupHoldReleaseReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
