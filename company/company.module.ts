import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanylistComponent } from './companylist/companylist.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogBodyComponent } from './company-dialog-body/dialog-body.component';
import { MatMenuModule } from '@angular/material/menu';
<<<<<<< HEAD
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
=======
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

>>>>>>> 5679b09e975111cb505b32978a6059248de805f6

@NgModule({
  declarations: [CompanylistComponent, DialogBodyComponent],
  entryComponents: [DialogBodyComponent],
  exports: [CompanylistComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatTableModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatMenuModule,
<<<<<<< HEAD
    MatPaginatorModule,
    MatSortModule,
    MatButtonToggleModule,
=======
    MatPaginatorModule,MatSortModule
>>>>>>> 5679b09e975111cb505b32978a6059248de805f6
  ],
})
export class CompanyModule {}
