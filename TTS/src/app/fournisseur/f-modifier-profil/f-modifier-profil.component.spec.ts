import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FModifierProfilComponent } from './f-modifier-profil.component';

describe('FModifierProfilComponent', () => {
  let component: FModifierProfilComponent;
  let fixture: ComponentFixture<FModifierProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FModifierProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FModifierProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
