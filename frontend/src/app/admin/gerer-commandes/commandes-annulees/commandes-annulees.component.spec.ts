import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesAnnuleesComponent } from './commandes-annulees.component';

describe('CommandesAnnuleesComponent', () => {
  let component: CommandesAnnuleesComponent;
  let fixture: ComponentFixture<CommandesAnnuleesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandesAnnuleesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandesAnnuleesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
