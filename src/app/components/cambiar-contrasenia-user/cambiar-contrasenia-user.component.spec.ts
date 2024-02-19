import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarContraseniaUserComponent } from './cambiar-contrasenia-user.component';

describe('CambiarContraseniaUserComponent', () => {
  let component: CambiarContraseniaUserComponent;
  let fixture: ComponentFixture<CambiarContraseniaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CambiarContraseniaUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CambiarContraseniaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
