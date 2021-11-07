import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Menu } from '../components/common/Menu';
import { TODOS_PAGE, ADD_PAGE } from './paths';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ADD_PAGE}>
          <Menu />
          add
        </Route>
        <Route path={TODOS_PAGE}>
          <Menu />
          view
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;