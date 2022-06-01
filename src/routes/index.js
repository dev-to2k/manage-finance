import Dashboard from '@pages/Dashboard';
import MonthlySalary from '@pages/MonthlySalary';

const publicRouters = [
  {
    path: '/',
    component: Dashboard,
  },
  {
    path: '/monthly-salary',
    component: MonthlySalary,
  },
];

const privateRouters = [];

export { publicRouters, privateRouters };
