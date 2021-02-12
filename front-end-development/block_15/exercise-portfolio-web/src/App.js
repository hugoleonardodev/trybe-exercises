import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navigator from './components/Navigator';

function App() {
  return (
    <main className="App">     
      <Header />
      <Navigator />
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </main>
  );
}

export default App;
