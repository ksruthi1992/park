import { ModuleWithProviders } from '@angular/core';

export interface ILot {
    _id? : string;
    pLotSign: string;
    pLotState: string;
    pLotType: string;
    pLotName: string;
    pLotVacancy: number;
    pLotGeoLat: string;
    pLotGeoLong: string;
    pLotDesc: string;
}

export interface IRouting {
    routes: ModuleWithProviders,
    components: any[]
}

export interface IPagedResults<T> {
    totalRecords: number;
    results: T;
}

export interface ILotResponse {
    lot: ILot;
    status: boolean;
    error: string;
}

