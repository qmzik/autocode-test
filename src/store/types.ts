export interface IAuth {
    login: string;
    date: number;
}

export interface IReport {
    type: 'VIN' | 'ГРЗ' | 'BODY';
    id: string;
    date: number;
    status: 'DONE' | 'PROGRESS' | 'ERROR';
}
