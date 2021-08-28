import Home from './containers/Home/Home';
import Products from './containers/Products/Products';
import Detail from './containers/Detail/Detail';

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
