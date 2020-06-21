import Vue from 'vue'
import VueRouter from 'vue-router'
import publicRoutes from '../views/public/router';
import protectedRoutes from '../views/protected/router';

Vue.use(VueRouter);

  const routes = [
      ...publicRoutes,
      ...protectedRoutes,
    {
      path:'/',
      redirect: '/signup'
    }
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {

    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

    if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

    next();
});

export default router
