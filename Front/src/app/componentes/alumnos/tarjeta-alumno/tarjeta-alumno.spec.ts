import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaAlumno } from './tarjeta-alumno';

describe('TarjetaAlumno', () => {
  let component: TarjetaAlumno;
  let fixture: ComponentFixture<TarjetaAlumno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaAlumno],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaAlumno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
