import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LModifierProfilComponent } from './l-modifier-profil.component';

describe('LModifierProfilComponent', () => {
  let component: LModifierProfilComponent;
  let fixture: ComponentFixture<LModifierProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LModifierProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LModifierProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
