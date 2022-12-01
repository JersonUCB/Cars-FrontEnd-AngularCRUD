import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAutoComponent } from './formulario-auto.component';

describe('FormularioAutoComponent', () => {
  let component: FormularioAutoComponent;
  let fixture: ComponentFixture<FormularioAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
