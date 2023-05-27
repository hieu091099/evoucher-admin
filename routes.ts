// routes.ts
var routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    layout: '/admin',
  },
  {
    path: '/campains',
    name: 'Campains',
    layout: '/admin',
  },
  {
    path: '/games',
    name: 'Games',
    layout: '/admin',
  },
  {
    path: '/partners',
    name: 'Partners',
    layout: '/admin',
  },
  {
    path: '/transactions',
    name: 'Transactions',
    layout: '/admin',
  },
  {
    path: '/users',
    name: 'Users',
    layout: '/admin',
  },
  {
    path: '/vouchers',
    name: 'Vouchers',
    layout: '/admin',
  },
  {
    path: '/login',
    name: 'Login',
    layout: '/auth',
  },
  {
    path: '/register',
    name: 'Register',
    layout: '/auth',
  },
];

export default routes;