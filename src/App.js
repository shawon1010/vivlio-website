import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
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
        </Switch>
</BrowserRouter>
    
    </div>             
  );
}

export default App;
