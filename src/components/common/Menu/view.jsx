import { Link } from 'react-router-dom';
import { ADD_PAGE, TODOS_PAGE } from '../../../router/paths';

const PAGES = [
  { title: 'Add Todo', path: ADD_PAGE },
  { title: 'View Todos', path: TODOS_PAGE },
];

function Menu() {
  return (
    <nav>
      <ul>
        {PAGES.map(page => (
          <li key={page.path}>
            <Link to={page.path}>
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
