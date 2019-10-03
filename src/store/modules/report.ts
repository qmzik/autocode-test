import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store/store';
import { IReport } from '../types';

@Module({ name: 'report', store, dynamic: true })
class Report extends VuexModule {
    public reports: IReport[] = [];

    @Action
    public addReport(report: IReport): void {
        this.setReport(report);
        this.saveStore();
    }

    @Action
    public saveStore(): void {
        try {
            localStorage.setItem('reports', JSON.stringify(this.reports));
        } catch (error) {

        }
    }

    @Mutation
    public parseStore(): void {
        try {
            const data = localStorage.getItem('reports');
            if (data !== null) {
                this.reports = JSON.parse(data);
            }
        } catch (error) {
            
        }
    }

    @Action
    public removeReport(id: string): void {
        this.deleteFromReports(id);
        this.saveStore();
    }

    @Mutation
    public clearReports(): void {
        this.reports = [];
        localStorage.removeItem('reports');
    }

    @Mutation
    private deleteFromReports(id: string): void {
        const index = this.reports.findIndex((item) => item.id === id);
        this.reports.splice(index, 1);
        localStorage.setItem('reports', JSON.stringify(this.reports));
    }

    @Mutation
    private setReport(report: IReport): void {
        this.reports.push(report);
        localStorage.setItem('reports', JSON.stringify(this.reports));
    }
}

export const ReportModule = getModule(Report);
