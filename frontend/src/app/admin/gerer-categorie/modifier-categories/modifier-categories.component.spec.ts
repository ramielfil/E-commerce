import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCategoriesComponent } from './modifier-categories.component';

describe('ModifierCategoriesComponent', () => {
  let component: ModifierCategoriesComponent;
  let fixture: ComponentFixture<ModifierCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
