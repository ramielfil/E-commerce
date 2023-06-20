import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterCommandesComponent } from './consulter-commandes.component';

describe('ConsulterCommandesComponent', () => {
  let component: ConsulterCommandesComponent;
  let fixture: ComponentFixture<ConsulterCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterCommandesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
