import { Services } from 'src/app/Services';
import { DialogBodyComponent } from '../company-dialog-body/dialog-body.component';
import { MatDialog } from '@angular/material/dialog';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Company } from 'src/util/company';

export interface Data {
  name: String;
  city: String;
  state: String;
  accounts: Number;
  clients: Number;
  collaborators: Number;
  contacts: Number;
  countryCode: String;
  website: String;
}

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.scss'],
})
export class CompanylistComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'name',
    'city',
    'accounts',
    'clients',
    'collaborators',
    'contacts',
    'countryCode',
    'website',
  ];

  dataSources!: MatTableDataSource<Company>;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
    private service: Services
  ) {
    this.service.getCompany().subscribe((data :Company[]) => {
      this.dataSources = new MatTableDataSource(data);
      this.dataSources.sort= this.sort
      console.log('Company ', this.dataSources);
    });
  }
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  ngAfterViewInit() {
    this.dataSources.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {

    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  openDialog() {
    this.dialog.open(DialogBodyComponent, {
      width: '800px',
    });
  }
}
