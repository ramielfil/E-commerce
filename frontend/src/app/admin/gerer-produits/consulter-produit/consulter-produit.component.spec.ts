import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterProduitComponent } from './consulter-produit.component';

describe('ConsulterProduitComponent', () => {
  let component: ConsulterProduitComponent;
  let fixture: ComponentFixture<ConsulterProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
