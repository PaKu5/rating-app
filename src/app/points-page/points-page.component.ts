import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../_services/merchant.service';
import { Merchant } from '../_models/merchant';
import { AuthService } from '../_services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { PointsModalComponent } from '../points-modal/points-modal.component';

@Component({
  selector: 'app-points-page',
  templateUrl: './points-page.component.html',
  styleUrls: ['./points-page.component.css']
})
export class PointsPageComponent implements OnInit {

  displayedColumns: string[] = null;;
  dataSource = null;

  constructor(private merchantService: MerchantService, private auth: AuthService, private dialog: MatDialog) { }

  ngOnInit() {
    this.merchantService.getMerchants().subscribe(merchants => {
      if(this.auth.currentUserValue) {
        this.displayedColumns = ['id', 'name', 'date', 'pointsAll', 'pointsSpendEdit', 'pointsCurr'];
      } else {
        this.displayedColumns = ['id', 'name', 'date', 'pointsAll', 'pointsSpend', 'pointsCurr'];
      }
      this.dataSource = merchants;
    });
  }

  editPoints(merchant:Merchant) {
    const dialogRef = this.dialog.open(PointsModalComponent, {
      width: '80%',
      data: merchant
    });
  }

}
