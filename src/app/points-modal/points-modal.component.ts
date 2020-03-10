import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Merchant } from '../_models/merchant';
import { MerchantService } from '../_services/merchant.service';

@Component({
  selector: 'app-points-modal',
  templateUrl: './points-modal.component.html',
  styleUrls: ['./points-modal.component.css']
})
export class PointsModalComponent {

  value:number;

  constructor(public dialogRef: MatDialogRef<PointsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public merchant: Merchant,
    private merchantService: MerchantService) { }

  updateMerchant() {
    if(!this.value) this.value = 0;
    this.merchant.pointsSpend = this.value;
    this.merchant.pointsCurr = this.merchant.pointsAll - this.merchant.pointsSpend;
    this.merchantService.updateMerchant(this.merchant).subscribe(() => this.dialogRef.close());
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
