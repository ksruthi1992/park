import { Injectable } from '@angular/core';

//Using the new HttpClientModule now. If you're still on < Angular 4.3 see the 
//data.service.ts file instead (simplify rename it to the name 
//of this file to use it instead)
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { ILot, IPagedResults, ILotResponse } from '../shared/interfaces';

@Injectable()
export class DataService {

    baseLotsUrl: string = '/api/lots';

    baseCustomersUrl: string = '/api/customers';
    baseStatesUrl: string = '/api/states'

    constructor(private http: HttpClient) { 

    }
    

    // Parking Lot Calls
    getLots() : Observable<ILot[]> {
        return this.http.get<ILot[]>(this.baseLotsUrl)
                   .map((lots: ILot[]) => {
                       return lots;
                   })
                   .catch(this.handleError);
    }

    getLotsPage(page: number, pageSize: number) : Observable<IPagedResults<ILot[]>> {
        return this.http.get<ILot[]>(`${this.baseLotsUrl}/page/${page}/${pageSize}`, {observe: 'response'})
                    .map((res) => {
                        //Need to observe response in order to get to this header (see {observe: 'response'} above)
                        const totalRecords = +res.headers.get('x-inlinecount');
                        let lots = res.body as ILot[];
                        return {
                            results: lots,
                            totalRecords: totalRecords
                        };
                    })
                    .catch(this.handleError);
    }
    
    getLot(id: string) : Observable<ILot> {
        return this.http.get<ILot>(this.baseLotsUrl + '/' + id)
                   .catch(this.handleError);
    }

    insertLot(lot: ILot) : Observable<ILot> {
        return this.http.post<ILotResponse>(this.baseLotsUrl, lot)
                   .map((data) => {
                       console.log('insertLot status: ' + data.status);
                       return data.lot;
                   })
                   .catch(this.handleError);
    }
   
    updateLot(lot: ILot) : Observable<ILot> {
        return this.http.put<ILotResponse>(this.baseLotsUrl + '/' + lot._id, lot) 
                   .map((data) => {
                       console.log('updateLot status: ' + data.status);
                       return data.lot;
                   })
                   .catch(this.handleError);
    }

    deleteLot(id: string) : Observable<boolean> {
        return this.http.delete<boolean>(this.baseLotsUrl + '/' + id)
                   .catch(this.handleError);
    }


    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error); 
        if (error.error instanceof Error) {
          let errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          //return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'Node.js server error');
    }

}
