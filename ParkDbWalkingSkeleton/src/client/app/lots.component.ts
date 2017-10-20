import { Component, OnInit } from '@angular/core';

import { ILot, Lot } from './lot';
import { LotService } from './lot.service';

@Component ({
    selector: 'app-lots',
    templateUrl: './lots.component.html'
})
export class LotsComponent implements OnInit {
    editMode: boolean = false;
    currentLot: Lot;
    lotCollection: any = [];

    constructor(private lotService: LotService) {}

    ngOnInit() {
        this.getLots();
    }

    // Get full collection of Lots
    getLots() {
        return this.lotService.getLots().subscribe( lotList => {
            this.lotCollection = lotList;
        });
    }

    // Add or Update a Lot
    saveLot () {
        if (this.editMode) {
          this.lotService.addLot(this.currentLot).subscribe(aLot => {
            this.editMode = false;
            this.currentLot = null;
            this.lotCollection.push(aLot);
          });
        } else {
          this.lotService.updateLot(this.currentLot).subscribe(aLot => {
            this.editMode = false;
            this.currentLot = null;
          });
        }
      }

      // Delete a Lot
      deleteLot(pLot: Lot) {
        this.lotService.deleteLot(pLot).subscribe(res => {
          this.lotCollection = this.lotCollection.filter(l => l !== pLot);
          if (this.currentLot === pLot) {
            this.currentLot = null;
          }
        });
      }
    
      onSelect(pLot: Lot) {
        this.editMode = false;
        this.currentLot = pLot;
      }

      enableEditMode() {
        this.editMode = true;
        this.currentLot = new Lot();
      }

      cancelEditMode() {
        this.editMode = false;
        this.currentLot = null;
      }
}