import { Component,ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  showFiller = false;

  panelOpenState = false;
  panelOpenState1 = false;

}
