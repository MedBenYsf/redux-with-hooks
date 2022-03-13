import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contacts from './components/Contacts';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Contacts></Contacts>
    </div>
    </Provider>
  );
}

export default App;
