import logo from './logo.svg';
import './App.css';
import AddJob from './Components/AddJob';
import { Provider } from 'react-redux';
import store from './Utils/store';
import Card from './Components/Card';
import { Link, Outlet, Router } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Outlet></Outlet>
    </Provider>
  );
}


export default App;
