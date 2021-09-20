import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurbookTimelineComponent } from './furbook-timeline.component';

describe('FurbookTimelineComponent', () => {
  let component: FurbookTimelineComponent;
  let fixture: ComponentFixture<FurbookTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurbookTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurbookTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
