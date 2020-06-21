const protectedRoutes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        meta: { title: 'Profile | Motionwares' },
        component: () => import(/* webpackChunkName: 'dashboard'*/'./Dashboard.vue'),
    }
];

export default protectedRoutes;