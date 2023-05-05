import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDashboardDialogComponent } from './edit-dashboard-dialog.component';

describe('EditDashboardDialogComponent', () => {
  let component: EditDashboardDialogComponent;
  let fixture: ComponentFixture<EditDashboardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDashboardDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDashboardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
