import React, { Component } from 'react';
import logo from '../../image/logo_image_blue_pixchat.png'
import {Link }from 'react-router-dom';

 class Navbar extends Component {
  render() {
    return (
     
     <nav className="navbar navbar-expand-sm mb-4">
    <div className="container">
      {/* <a className="navbar-brand" href="landing.html">pixchatapp</a> */}
      <Link  className="navbar-brand" to="/">
        <img className="navbar-image" src={logo} alt="pixchat logo" id="logo"/>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
           
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/register">Sign Up</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    ) 
  }
}
export default Navbar;