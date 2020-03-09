import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPostComponent } from './start-post.component';

describe('StartPostComponent', () => {
  let component: StartPostComponent;
  let fixture: ComponentFixture<StartPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
