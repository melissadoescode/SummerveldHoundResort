import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurbookPhotosComponent } from './furbook-photos.component';

describe('FurbookPhotosComponent', () => {
  let component: FurbookPhotosComponent;
  let fixture: ComponentFixture<FurbookPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurbookPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurbookPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
