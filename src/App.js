import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cs from './components/Cs';
import Header from './components/Header';
import History from './components/History';
import Homepage from './components/Homepage';
import Neuroscience from './components/Neuroscience';

function App() {
  return (
    <div>     
      <div className="wrapper">
      <Header/>      
      </div>
      <BrowserRouter>
      <Switch>
          <Route exact path="/">
            <Homepage/>
          </Route>
          <Route exact path="/neuroscience">
          <Neuroscience/>
          </Route>
          <Route exact path="/cs">
          <Cs/>
          </Route>
          <Route exact path="/history">
          <History/>
          </Route>
        </Switch>
</BrowserRouter>
    
    </div>             
  );
}

export default App;
