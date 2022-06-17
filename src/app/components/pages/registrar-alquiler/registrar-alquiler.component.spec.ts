import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAlquilerComponent } from './registrar-alquiler.component';

describe('RegistrarAlquilerComponent', () => {
  let component: RegistrarAlquilerComponent;
  let fixture: ComponentFixture<RegistrarAlquilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAlquilerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
