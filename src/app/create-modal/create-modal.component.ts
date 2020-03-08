import { Component, OnInit } from '@angular/core';
import { Merchant } from '../merchant';
import { MerchantService } from '../merchant.service';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})
export class CreateModalComponent implements OnInit {


  constructor(private merchantService: MerchantService) { }

  ngOnInit() {
  }

  addMerchant(name:string): void {
    name = name.trim();
    var date = new Date();
    if(!name) { return; }
    this.merchantService.addMerchant({ name, date } as Merchant)
      .subscribe(merchant => null);
  }
}
