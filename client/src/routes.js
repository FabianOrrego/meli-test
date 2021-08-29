import Home from './containers/Home/Home';
import Products from './containers/Products/Products';
import Detail from './containers/Detail/Detail';
import NotFound from './containers/NotFound/NotFound';

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
  {
    path: "*",
    component: NotFound
  }
];

export default routes;
