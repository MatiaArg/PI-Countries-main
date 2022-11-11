import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'
import { BrowserRouter, Route } from 'react-router-dom';
import { MainPage } from './components/PAGES/MainPage/MainPage';
import { Home } from './components/PAGES/Home/Home';
import { CreateVideogame } from './components/CreateVideogame/CreateVideogame';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          {/*3 props q me da ROUTE => match, location, history */}
          <Route exact path='/' component= { MainPage }/>
          <Route path='/home' component= { Home }/>
          <Route path='/createVideogame' component= { CreateVideogame }/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
