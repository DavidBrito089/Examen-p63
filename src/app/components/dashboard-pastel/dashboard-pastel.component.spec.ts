import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPastelComponent } from './dashboard-pastel.component';

describe('DashboardPastelComponent', () => {
  let component: DashboardPastelComponent;
  let fixture: ComponentFixture<DashboardPastelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardPastelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardPastelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
