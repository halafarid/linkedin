import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationsCardComponent } from './invitations-card.component';

describe('InvitationsCardComponent', () => {
  let component: InvitationsCardComponent;
  let fixture: ComponentFixture<InvitationsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
