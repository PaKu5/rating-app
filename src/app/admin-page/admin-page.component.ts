import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Merchant } from '../merchant';
import { MerchantService } from '../merchant.service';
import { EditModalComponent } from '../edit-modal/edit-modal.component'
import { DeleteModalComponent } from '../delete-modal/delete-modal.component'

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  merchants: Merchant[];

  constructor(private merchantService: MerchantService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getMerchants();
  }

  onSelect(merchant: Merchant) {
    const dialogRef = this.dialog.open(EditModalComponent, {
      width: '80%',
      data: merchant
    });
  }

  onSelectDelete(merchant: Merchant) {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      data: merchant
    });
  }

  getMerchants(): void {
    this.merchantService.getMerchants()
        .subscribe(merchants => this.merchants = merchants);
  }

}