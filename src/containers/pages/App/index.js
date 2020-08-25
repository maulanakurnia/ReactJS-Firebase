import React from 'react';
import Login from '../Login';
import Register from '../Register';
import Dashboard from '../Dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
      </div>
    </Router>
  );
}

export default App;
