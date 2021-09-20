import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurbookFriendsComponent } from './furbook-friends.component';

describe('FurbookFriendsComponent', () => {
  let component: FurbookFriendsComponent;
  let fixture: ComponentFixture<FurbookFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurbookFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurbookFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
