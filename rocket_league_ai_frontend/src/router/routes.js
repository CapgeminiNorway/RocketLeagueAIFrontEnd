
const routes = [
  {
    path: '/',
    component: () => import('layouts/toolbar.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ],
  },
  {
    path: '/howto',
    component: () => import('layouts/toolbar.vue'),
    children: [
      { path: '', component: () => import('pages/howto.vue') },
    ],
  },
  {
    path: '/profile',
    component: () => import('layouts/toolbar.vue'),
    children: [
      { path: '', component: () => import('pages/profile.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
