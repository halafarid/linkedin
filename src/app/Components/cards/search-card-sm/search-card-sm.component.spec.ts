import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCardSmComponent } from './search-card-sm.component';

describe('SearchCardSmComponent', () => {
  let component: SearchCardSmComponent;
  let fixture: ComponentFixture<SearchCardSmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCardSmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCardSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
