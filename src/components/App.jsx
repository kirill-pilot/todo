import { Provider as ReduxProvider } from 'react-redux';

import { store } from '../redux/store';
import Router from '../router/index';

function App() {
  return (
    <ReduxProvider store={store}>
      <Router />
    </ReduxProvider>
  );
}

export default App;
