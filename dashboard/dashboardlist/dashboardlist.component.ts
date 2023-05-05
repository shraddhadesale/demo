import { Component ,} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDashboardDialogComponent } from '../add-dashboard-dialog/add-dashboard-dialog.component';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { EditDashboardDialogComponent } from '../edit-dashboard-dialog/edit-dashboard-dialog.component';
@Component({
  selector: 'app-dashboardlist',
  templateUrl: './dashboardlist.component.html',
  styleUrls: ['./dashboardlist.component.scss']
})
export class DashboardlistComponent {
  panelOpenState = false;

  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(AddDashboardDialogComponent, {
      width:'700px'
    });
  }
  openDialogEdit() {
    this.dialog.open( EditDashboardDialogComponent, {
      width:'700px'
    });
  }
}





