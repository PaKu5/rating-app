import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Merchant } from '../_models/merchant';
import { MerchantService } from '../_services/merchant.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public merchant: Merchant,
    private merchantService: MerchantService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteMerchant(): void {
    this.merchantService.deleteMerchant(this.merchant)
      .subscribe(() => this.dialogRef.close());  
  }

  close() {
    this.dialogRef.close();
  }

}
