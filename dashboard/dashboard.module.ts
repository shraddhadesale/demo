import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardlistComponent } from './dashboardlist/dashboardlist.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { AddDashboardDialogComponent } from './add-dashboard-dialog/add-dashboard-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditDashboardDialogComponent } from './edit-dashboard-dialog/edit-dashboard-dialog.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
@NgModule({
  declarations: [
    DashboardlistComponent,
    AddDashboardDialogComponent,
    EditDashboardDialogComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
    MatMenuModule,
    MatDividerModule,
    MatTabsModule,
    MatInputModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatButtonToggleModule

  ],
  entryComponents: [AddDashboardDialogComponent],
  exports: [DashboardlistComponent, ],
})
export class DashboardModule {}
