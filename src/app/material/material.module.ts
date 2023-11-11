import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import { NgChartsModule } from 'ng2-charts';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from "@angular/material/menu";
import {MatSelectModule} from '@angular/material/select';
const materialComponents:any = [
  MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatExpansionModule,
    MatDividerModule,
    NgChartsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatMenuModule,
    MatSelectModule
]

@NgModule({
    imports: [materialComponents],
    exports : [materialComponents]
    
})
export class MaterialModule { }
