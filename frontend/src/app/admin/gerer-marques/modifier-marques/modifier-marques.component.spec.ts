import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierMarquesComponent } from './modifier-marques.component';

describe('ModifierMarquesComponent', () => {
  let component: ModifierMarquesComponent;
  let fixture: ComponentFixture<ModifierMarquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierMarquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierMarquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
