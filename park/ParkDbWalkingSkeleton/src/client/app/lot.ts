export interface ILot {
    lotId: number;
    lotName: string;
    lotLocation: string;
    lotVacancy: number;
}

export class Lot implements ILot {
    lotId: number;
    lotName: string;
    lotLocation: string;
    lotVacancy: number;
}