import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesSkillComponent } from './categories-skill.component';

describe('CategoriesSkillComponent', () => {
  let component: CategoriesSkillComponent;
  let fixture: ComponentFixture<CategoriesSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
