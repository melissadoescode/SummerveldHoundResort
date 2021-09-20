import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurbookAboutComponent } from './furbook-about.component';

describe('FurbookAboutComponent', () => {
  let component: FurbookAboutComponent;
  let fixture: ComponentFixture<FurbookAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurbookAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurbookAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
