import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesResumeComponent } from './categories-resume.component';

describe('CategoriesResumeComponent', () => {
  let component: CategoriesResumeComponent;
  let fixture: ComponentFixture<CategoriesResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
