import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterCategoriesComponent } from './consulter-categories.component';

describe('ConsulterCategoriesComponent', () => {
  let component: ConsulterCategoriesComponent;
  let fixture: ComponentFixture<ConsulterCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
