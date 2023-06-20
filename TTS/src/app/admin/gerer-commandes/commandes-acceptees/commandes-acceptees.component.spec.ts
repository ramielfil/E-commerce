import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesAccepteesComponent } from './commandes-acceptees.component';

describe('CommandesAccepteesComponent', () => {
  let component: CommandesAccepteesComponent;
  let fixture: ComponentFixture<CommandesAccepteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandesAccepteesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandesAccepteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
