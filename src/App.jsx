import './App.css';
// import ProfilCard from './components/ProfilCard';
import ProfilMassEffect from './components/ProfilMassEffect';
import Signup from './components/Signup';
import ProfilUser from './components/ProfilUser';
import LoadingPage from './components/LoadingPage';
import React from 'react';
import { useState } from 'react';
import Match from './components/Match';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [currentPnj, setCurrentPnj] = useState({
    id: '',
    name: '',
    planet: '',
    race: '',
    gender: '',
    quote: '',
    description: '',
    img: '',
  });

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
              <Match setCurrentPnj={setCurrentPnj} currentPnj={currentPnj} />
            </Route>
            <Route>
              <Route exact path='/profilMassEffect'>
                <ProfilMassEffect currentPnj={currentPnj} />
              </Route>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
