import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEnventoComponent } from './form-envento.component';

describe('FormEnventoComponent', () => {
  let component: FormEnventoComponent;
  let fixture: ComponentFixture<FormEnventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEnventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEnventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
