import { Menu } from '../../common/Menu';

function Layout({ children }) {
  return (
    <>
      <Menu />
      {children}
    </>
  );
}

export default Layout;
