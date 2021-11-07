import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AddPage } from '../components/pages/addTodo';
import { TodosPage } from '../components/pages/todos';
import { TODOS_PAGE, ADD_TODO_PAGE } from './paths';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ADD_TODO_PAGE}>
          <AddPage />
        </Route>
        <Route path={TODOS_PAGE}>
          <TodosPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
