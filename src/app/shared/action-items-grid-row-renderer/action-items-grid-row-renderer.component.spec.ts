import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionItemGridRowRendererComponent } from './delete-grid-row-renderer.component';

describe('ActionItemGridRowRendererComponent', () => {
  let component: ActionItemGridRowRendererComponent;
  let fixture: ComponentFixture<ActionItemGridRowRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionItemGridRowRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionItemGridRowRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
