import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store/store';
import { IReport } from '../types';

@Module({ name: 'report', store, dynamic: true })
class Report extends VuexModule {
    public reports: IReport[] = [];

    @Action
    public addReport(report: IReport): void {
        this.setReport(report);
    }

    @Action
    public removeReport(id: string): void {
        this.deleteFromReports(id);
    }

    @Mutation
    private deleteFromReports(id: string): void {
        const index = this.reports.findIndex((item) => item.id === id);
        this.reports.splice(index, 1);
    }

    @Mutation
    private setReport(report: IReport): void {
        this.reports.push(report);
    }
}

export const ReportModule = getModule(Report);
