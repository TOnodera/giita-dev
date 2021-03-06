import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Index from '../views/index.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        component: Index,
    },
    /*
    {
        path: '/qiita',
        name: 'Qiita',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import('../views/qiita/index.vue'),
    },
    */
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
