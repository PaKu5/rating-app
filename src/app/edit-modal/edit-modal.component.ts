import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Merchant } from '../merchant';
import { MerchantService } from '../merchant.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent {

  constructor(
    public dialogRef: MatDialogRef<EditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public merchant: Merchant,
    private merchantService: MerchantService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateMerchant(): void {
    this.merchantService.updateMerchant(this.merchant)
      .subscribe(() => this.dialogRef.close());  
  }

}
