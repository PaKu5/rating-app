import { Component, OnInit } from '@angular/core';
import { Merchant } from '../merchant';
import { MerchantService } from '../merchant.service';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material/dialog';
import { RatingModalComponent } from '../rating-modal/rating-modal.component';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {

  merchants: Merchant[];
  logedIn: boolean;

  constructor(private merchantService: MerchantService, private auth: AuthService,  private dialog: MatDialog) { }

  ngOnInit() {
    this.logedIn = this.auth.isLoggedIn;
    this.getMerchants();
  }

  onSelect(merchant: Merchant) {
    const dialogRef = this.dialog.open(RatingModalComponent, {
      width: '80%',
      data: merchant
    });
  }

  getMerchants(): void {
    this.merchantService.getMerchants()
        .subscribe(merchants => this.merchants = merchants);
  }
}
