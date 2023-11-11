import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  action : any
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', action : "edit"},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', action : "edit"},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', action : "edit"},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', action : "edit"},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', action : "edit"},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', action : "edit"},


];


@Component({
  selector: 'app-branch-details',
  templateUrl: './branch-details.component.html',
  styleUrls: ['./branch-details.component.css']
})
export class BranchDetailsComponent implements AfterViewInit{
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


