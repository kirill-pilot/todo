import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from '../components/layouts/default';
import { TODOS_PAGE, ADD_PAGE } from './paths';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ADD_PAGE}>
          <Layout>
            add
          </Layout>
        </Route>
        <Route path={TODOS_PAGE}>
          <Layout>
            view
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;