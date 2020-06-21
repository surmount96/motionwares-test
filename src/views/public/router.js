const publicRoutes = [
    {
        path: '/signup',
        name: 'Signup',
        meta: { title: 'Signup | Motionwares' },
        component: () => import(/* webpackChunkName: 'signup'*/'./Signup.vue'),
    }
];

export default publicRoutes;