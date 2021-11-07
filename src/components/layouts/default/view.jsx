import PropTypes from 'prop-types';
import { Menu } from '../../common/Menu';

function Layout({ children }) {
  return (
    <>
      <Menu />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
