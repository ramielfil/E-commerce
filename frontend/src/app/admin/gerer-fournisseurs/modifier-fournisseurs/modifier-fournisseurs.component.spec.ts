import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFournisseursComponent } from './modifier-fournisseurs.component';

describe('ModifierFournisseursComponent', () => {
  let component: ModifierFournisseursComponent;
  let fixture: ComponentFixture<ModifierFournisseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierFournisseursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierFournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
