import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierClientsComponent } from './modifier-clients.component';

describe('ModifierClientsComponent', () => {
  let component: ModifierClientsComponent;
  let fixture: ComponentFixture<ModifierClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
