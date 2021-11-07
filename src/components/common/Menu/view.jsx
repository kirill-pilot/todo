import { Link } from 'react-router-dom';
import { ADD_TODO_PAGE, TODOS_PAGE } from '../../../router/paths';
import './styles.scss';

const PAGES = [
  { title: 'Add Todo', path: ADD_TODO_PAGE },
  { title: 'View Todos', path: TODOS_PAGE },
];

function Menu() {
  return (
    <nav className="menu">
      <ul className="menu__navbar">
        {PAGES.map(page => (
          <li key={page.path} className="menu__navbar-item">
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
