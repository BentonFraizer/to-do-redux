import './App.css';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import MainPage from '../MainPage/MainPage';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
