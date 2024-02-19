import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPastelngxComponent } from './dashboard-pastelngx.component';

describe('DashboardPastelngxComponent', () => {
  let component: DashboardPastelngxComponent;
  let fixture: ComponentFixture<DashboardPastelngxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardPastelngxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardPastelngxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
