import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../core/data.service';
import { ILot } from '../shared/interfaces';

@Component({
  selector: 'lot-edit',
  templateUrl: './lot-edit.component.html'
})
export class LotEditComponent implements OnInit {

  lot: ILot = {
    pLotSign: '',
    pLotState: '',
    pLotType: '',
    pLotName: '',
    pLotVacancy: null,
    pLotGeoLat: '',
    pLotGeoLong: '',
    pLotDesc: ''
  };

  errorMessage: string;
  deleteMessageEnabled: boolean;
  operationText: string = 'Insert';
  
  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private dataService: DataService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    if (id !== '0') {
      this.operationText = 'Update';
      this.getLot(id);
    }

  }

  getLot(id: string) {
      this.dataService.getLot(id)
        .subscribe((lot: ILot) => {
          this.lot = lot;
        },
        (err: any) => console.log(err));
  }

  submit() {

      if (this.lot._id) {

        this.dataService.updateLot(this.lot)
          .subscribe((lot: ILot) => {
            if (lot) {
              this.router.navigate(['/lots']);
            } else {
              this.errorMessage = 'Unable to save parking lot';
            }
          },
          (err: any) => console.log(err));

      } else {

        this.dataService.insertLot(this.lot)
          .subscribe((lot: ILot) => {
            if (lot) {
              this.router.navigate(['/lots']);
            }
            else {
              this.errorMessage = 'Unable to add parking lot';
            }
          },
          (err: any) => console.log(err));
          
      }
  }
  
  cancel(event: Event) {
    event.preventDefault();
    this.router.navigate(['/']);
  }

  delete(event: Event) {
    event.preventDefault();
    this.dataService.deleteLot(this.lot._id)
        .subscribe((status: boolean) => {
          if (status) {
            this.router.navigate(['/lots']);
          }
          else {
            this.errorMessage = 'Unable to delete parking lot';
          }
        },
        (err) => console.log(err));
  }

}