import Vue from 'vue';
import Router from 'vue-router';
import { AuthModule } from '@/store/modules/auth';
const META_AUTH = 'META_AUTH';
Vue.use(Router);

const router =  new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('./views/Home.vue'),
            meta: [META_AUTH],
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('./views/Login.vue'),
            meta: [],
        },
    ],
});

router.beforeEach((to, from, next) => {
    const meta: string[] = to.meta;

    if (meta.includes(META_AUTH)) {
      AuthModule.isAuthed ? next() : next({ name: 'Login' });

      return;
    }

    next();
});


export default router;
