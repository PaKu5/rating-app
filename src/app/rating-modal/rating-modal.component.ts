import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Merchant } from '../_models/merchant';
import { MerchantService } from '../_services/merchant.service';

interface Rating {
  value: string;
  points: number;
}

@Component({
  selector: 'app-rating-modal',
  templateUrl: './rating-modal.component.html',
  styleUrls: ['./rating-modal.component.css']
})
export class RatingModalComponent {

  constructor(public dialogRef: MatDialogRef<RatingModalComponent>,
    @Inject(MAT_DIALOG_DATA) public merchant: Merchant,
    private merchantService: MerchantService) {}

  myRating:number;

  ratings: Rating[] = [
    {value: "1 Stern", points: 0},
    {value: "2 Sterne", points: 0},
    {value: "3 Sterne", points: 0},
    {value: "4 Sterne", points: 4},
    {value: "5 Sterne", points: 5},
  ];

  updateMerchant(){
    this.merchant.pointsAll += this.myRating;
    this.merchant.pointsCurr = this.merchant.pointsAll - this.merchant.pointsSpend;
    this.merchantService.updateMerchant(this.merchant).subscribe(() => this.dialogRef.close());
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
