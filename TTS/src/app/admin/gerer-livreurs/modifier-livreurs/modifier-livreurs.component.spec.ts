import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierLivreursComponent } from './modifier-livreurs.component';

describe('ModifierLivreursComponent', () => {
  let component: ModifierLivreursComponent;
  let fixture: ComponentFixture<ModifierLivreursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierLivreursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierLivreursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
