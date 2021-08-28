import Home from './views/Home';
import Products from './views/Products';
import Detail from './views/Detail';

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/items",
    component: Products,
    exact: true
  },
  {
    path: "/items/:id",
    component: Detail,
  },
  /*{
    component: NotFoundPage
  }*/
];

export default routes;
