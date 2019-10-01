export interface IUser {
    login: string;
    password: string;
    date: number;
}

export interface IReport {
    type: 'VIN' | 'ГРЗ' | 'BODY';
    id: string;
    date: number;
    status: 'DONE' | 'PROGRESS' | 'ERROR';
}
