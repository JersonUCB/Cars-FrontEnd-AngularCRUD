import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeCarsComponent } from './lista-de-cars.component';

describe('ListaDeCarsComponent', () => {
  let component: ListaDeCarsComponent;
  let fixture: ComponentFixture<ListaDeCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeCarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
