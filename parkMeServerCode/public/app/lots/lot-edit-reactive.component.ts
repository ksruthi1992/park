import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from '../core/data.service';
import { ILot } from '../shared/interfaces';
import { ValidationService } from '../shared/validation.service';

@Component({
  selector: 'lot-edit-reactive',
  templateUrl: './lot-edit-reactive.component.html'
})
export class LotEditReactiveComponent implements OnInit {

  lotForm: FormGroup;
  lot: ILot = {
    pLotSign: '',
    pLotState: '',
    pLotType: '',
    pLotName: '',
    pLotVacancy: 0,
    pLotGeoLat: '',
    pLotGeoLong: '',
    pLotDesc: ''
  };
 
  errorMessage: string;
  deleteMessageEnabled: boolean;
  operationText: string = 'Insert';
  
  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private dataService: DataService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    if (id !== '0') {
      this.operationText = 'Update';
      this.getLot(id);
    }

    this.buildForm();
  }

  getLot(id: string) {
      this.dataService.getLot(id)
        .subscribe((lot: ILot) => {
          this.lot = lot;
          this.buildForm();
        },
        (err) => console.log(err));
  }

  buildForm() {
      this.lotForm = this.formBuilder.group({
        pLotSign:     [this.lot.pLotSign, Validators.required],
        pLotState:    [this.lot.pLotState, Validators.required],
        pLotType:     [this.lot.pLotType, Validators.required],
        pLotName:     [this.lot.pLotName, Validators.required],
        pLotVacancy:  [this.lot.pLotVacancy, Validators.required],
        pLotGeoLat:   [this.lot.pLotGeoLat, Validators.required],
        pLotGeoLong:  [this.lot.pLotGeoLong, Validators.required],
        pLotDesc:     [this.lot.pLotDesc, Validators.required],
       });
  }

  
  submit({ value, valid }: { value: ILot, valid: boolean }) {
      
      value._id = this.lot._id;

      if (value._id) {

        this.dataService.updateLot(value)
          .subscribe((lot: ILot) => {
            if (lot) {
              this.router.navigate(['/lots']);
            }
            else {
              this.errorMessage = 'Unable to save parking lot';
            }
          },
          (err) => console.log(err));

      } else {

        this.dataService.insertLot(value)
          .subscribe((lot: ILot) => {
            if (lot) {
              this.router.navigate(['/lots']);
            }
            else {
              this.errorMessage = 'Unable to add parking';
            }
          },
          (err) => console.log(err));
          
      }
  }
  
  cancel(event: Event) {
    event.preventDefault();
    this.router.navigate(['/lots']);
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