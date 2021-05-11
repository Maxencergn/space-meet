import './App.css';
// import ProfilMassEffect from './components/ProfilMassEffect';
// import ProfilCard from './components/ProfilCard';
import Signup from './components/Signup';
import ProfilUser from './components/ProfilUser';
import LoadingPage from './components/LoadingPage';
import React from 'react';
import Match from './components/Match';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <Switch>
            <Route exact path='/'>
              <LoadingPage />
            </Route>
            <Route exact path='/signup'>
              <Signup />
            </Route>
            <Route exact path='/ProfilUser'>
              <ProfilUser />
            </Route>
            <Route exact path='/match'>
              <Match />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
