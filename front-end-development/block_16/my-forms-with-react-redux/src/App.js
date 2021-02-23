import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CurriculumValidation from './pages/Curriculum';

const App = (props) => {
  return (
    <BrowserRouter className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/curriculum" component={CurriculumValidation} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
