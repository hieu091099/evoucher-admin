// routes.ts
var routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    layout: '/admin',
  },
  {
    path: '/profile',
    name: 'User Profile',
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