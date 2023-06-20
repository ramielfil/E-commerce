import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulerClientsComponent } from './consuler-clients.component';

describe('ConsulerClientsComponent', () => {
  let component: ConsulerClientsComponent;
  let fixture: ComponentFixture<ConsulerClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulerClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulerClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
