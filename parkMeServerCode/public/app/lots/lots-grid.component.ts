import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ILot } from '../shared/interfaces';
import { Sorter } from '../core/sorter';
import { TrackByService } from '../core/trackby.service';

@Component({ 
  selector: 'lots-grid', 
  templateUrl: './lots-grid.component.html',
  //When using OnPush detectors, then the framework will check an OnPush 
  //component when any of its input properties changes, when it fires 
  //an event, or when an observable fires an event 
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class LotsGridComponent implements OnInit {

  @Input() lots: ILot[] = [];

  constructor(private sorter: Sorter, public trackby: TrackByService) { }
   
  ngOnInit() {

  }

  sort(prop: string) {
      this.sorter.sort(this.lots, prop);
  }

}
