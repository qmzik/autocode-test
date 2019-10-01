
import { VuexModule, Module, Action, getModule, Mutation } from 'vuex-module-decorators';
import store from '@/store/store';
import router from '@/router';
import { IUser } from '@/store/types';

@Module({ name: 'auth', store, dynamic: true })
class Auth extends VuexModule {

}

export const AuthModule = getModule(Auth);
