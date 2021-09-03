import './App.css';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Home from './components/Home/Home';
import Item from './components/ItemDetail.js/ItemDeatil';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className='wrapper'>
          <Switch>
            <Route
              exact
              path='/'
              component={Home}
            />
            <Route
              exact
              path='/about'
              component={About}
            />
            <Route
              exact
              path='/shop'
              component={Shop}
            />
            <Route 
              path='/shop/:id'
              component={Item}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
