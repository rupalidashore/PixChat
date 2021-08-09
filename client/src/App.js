import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/layout/auth/Register';
import Login from './components/layout/auth/Login';


class App  extends Component {

  render() {
  return (

    <Router>
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Landing />
      <Footer />
      </div>
      </Router>
  );
}
}
export default App;
