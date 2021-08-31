import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import jwt_decode from 'jwt-decode';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import './App.css';
import Register from './components/layout/auth/Register';
import Login from './components/layout/auth/Login';
import store from './store';
import { logoutUser } from './actions/authActions';
import PrivateRoute from "./components/common/PrivateRoute";
import {SET_USER} from './actions/types';
import { clearCurrentProfile } from "./actions/profileActions";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/create-profile/CreateProfile";
import EditProfile from "./components/edit-profile/EditProfile";

import AddEducation from "./components/add-credentials/AddEducation";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import Posts from './components/posts/Posts'
import Post from './components/post/Post'

import setAuthToken from './utils/setAuthToken';



if (localStorage.jwtToken){
  //Decoded token
  const decoded = jwt_decode(localStorage.jwtToken);

  //check for expired token
 const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime){
 //Expired
    //Logout user
    store.dispatch(logoutUser());
     //Redirect user to login
    window.location.href = '/login';
  } else{

      //set token to auth header
      setAuthToken(localStorage.jwtToken)
      //dispatch
      store.dispatch({
        type:SET_USER,
        payload:decoded
      });
  }

  //Set auth header
  setAuthToken(localStorage.jwtToken);
  //dispatch
  store.dispatch({
    type: SET_USER,
    payload: decoded,
  });
}
class App extends Component {
  render() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />

      <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:handle" component={Profile} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
              </Switch>
              <Switch>
                  <PrivateRoute
                    exact
                    path="/edit-profile"
                    component={EditProfile}
                  />
                </Switch>
              
              <Switch>
                <PrivateRoute
                  exact
                  path="/add-education"
                  component={AddEducation}
                />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/feed" component={Posts} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/post/:id" component={Post} />
              </Switch>
      <Footer />
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
