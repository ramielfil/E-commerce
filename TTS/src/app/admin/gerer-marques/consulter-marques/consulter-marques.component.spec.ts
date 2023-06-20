import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterMarquesComponent } from './consulter-marques.component';

describe('ConsulterMarquesComponent', () => {
  let component: ConsulterMarquesComponent;
  let fixture: ComponentFixture<ConsulterMarquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterMarquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterMarquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
