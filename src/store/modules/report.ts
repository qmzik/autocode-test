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

    @Mutation
    private setReport(report: IReport): void {
        this.reports.push(report);
    }
}

export const ReportModule = getModule(Report);
