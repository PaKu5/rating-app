import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Merchant } from './merchant';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  
  createDb() {
    const merchants = [
      { id: 1, name: 'Meyer', date: new Date(2020, 1, 2), pointsAll: 0, pointsSpend: 0, pointsCurr: 0 },
      { id: 2, name: 'Müller', date: new Date(2020, 2, 6), pointsAll: 0, pointsSpend: 0, pointsCurr: 0 },
      { id: 3, name: 'Schulze', date: new Date(2020, 2, 6), pointsAll: 0, pointsSpend: 0, pointsCurr: 0 }
    ];
    return {merchants};
  }

  genId(merchants: Merchant[]): number {
    return merchants.length > 0 ? Math.max(...merchants.map(merchant => merchant.id)) + 1 : 1;
  }

  constructor() { }
}
