import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FModifierProduitComponent } from './f-modifier-produit.component';

describe('FModifierProduitComponent', () => {
  let component: FModifierProduitComponent;
  let fixture: ComponentFixture<FModifierProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FModifierProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FModifierProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
