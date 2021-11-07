import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { TODOS_PAGE, ADD_PAGE } from './paths';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ADD_PAGE}>
          add
        </Route>
        <Route path={TODOS_PAGE}>
          view
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;