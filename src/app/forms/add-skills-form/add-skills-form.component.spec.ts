import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkillsFormComponent } from './add-skills-form.component';

describe('AddSkillsFormComponent', () => {
  let component: AddSkillsFormComponent;
  let fixture: ComponentFixture<AddSkillsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSkillsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSkillsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
