
import { VuexModule, Module, Action, getModule, Mutation } from 'vuex-module-decorators';
import store from '@/store/store';
import router from '@/router';
import { IAuth } from '@/store/types';
import { ReportModule } from './report';
const HOUR_IN_MILLISEC = 1000 * 60 * 60;

@Module({ name: 'auth', store, dynamic: true })
class Auth extends VuexModule {
    public login: string = localStorage.getItem('login') || '';
    public date: number = Number(localStorage.getItem('loginDate')) || 0;

    public get isAuthed(): boolean {
         return Boolean(this.login) || +new Date() < this.date + HOUR_IN_MILLISEC;
    }

    @Action
    public authenticate(user: IAuth): void {
        this.setAuthData(user);
    }

    @Action
    public logout(): void {
        this.clearAuthData();
        ReportModule.clearReports();
    }

    @Mutation
    private clearAuthData(): void {
        localStorage.removeItem('login');
        localStorage.removeItem('loginDate');
    }

    @Mutation
    private setAuthData(user: IAuth): void {
        localStorage.setItem('login', user.login);
        localStorage.setItem('loginDate', String(user.date));
    }
}

export const AuthModule = getModule(Auth);
