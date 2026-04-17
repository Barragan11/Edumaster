import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAlumno } from './formulario-alumno';

describe('FormularioAlumno', () => {
  let component: FormularioAlumno;
  let fixture: ComponentFixture<FormularioAlumno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioAlumno],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioAlumno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
