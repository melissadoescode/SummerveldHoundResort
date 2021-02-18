import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggoProfileComponent } from './doggo-profile.component';

describe('DoggoProfileComponent', () => {
  let component: DoggoProfileComponent;
  let fixture: ComponentFixture<DoggoProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoggoProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoggoProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
