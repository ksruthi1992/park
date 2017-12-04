import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataFilterService } from '../core/data-filter.service';
import { DataService } from '../core/data.service';
import { ILot, IPagedResults } from '../shared/interfaces';

@Component({ 
  selector: 'lots', 
  templateUrl: './lots.component.html'
})
export class LotsComponent implements OnInit {

  title: string;
  listLots: ILot[] = [];
  filteredLots: ILot[] = [];

  totalRecords: number = 0;
  pageSize: number = 20;

  constructor(private router: Router, 
              private dataService: DataService,
              private dataFilter: DataFilterService) { }
  
  ngOnInit() {
    this.title = 'Parking Lots';
    this.getLotsPage(1);
  }

  filterChanged(filterText: string) {
    if (filterText && this.listLots) {
        let props = ['pLotName', 'pLotState', 'pLotType', 'pLotVacancy', 'pLotDesc'];
        this.filteredLots = this.dataFilter.filter(this.listLots, props, filterText);
    }
    else {
      this.filteredLots = this.listLots;
    }
  }

  pageChanged(page: number) {
    this.getLotsPage(page);
  }

  getLotsPage(page: number) {
    this.dataService.getLotsPage((page - 1) * this.pageSize, this.pageSize)
        .subscribe((response: IPagedResults<ILot[]>) => {
          this.listLots = this.filteredLots = response.results;
          this.totalRecords = response.totalRecords;
        },
        (err: any) => console.log(err),
        () => console.log('getLotsPage() retrieved parking lots'));
  }

}