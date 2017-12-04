import { Injectable } from '@angular/core';

import { ILot } from '../shared/interfaces';

@Injectable()
export class TrackByService {
  
  lot(index: number, lot: ILot) {
    return lot._id;
  }
  
}