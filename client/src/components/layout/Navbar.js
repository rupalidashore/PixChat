import React, { Component } from 'react';
import logo from '../../image/logo_image_blue_pixchat.png'

 class Navbar extends Component {
  render() {
    return (
     
     <nav className="navbar navbar-expand-sm mb-4">
    <div className="container">
      {/* <a className="navbar-brand" href="landing.html">pixchatapp</a> */}
      <a href="landing.html" className="navbar-brand">
        <img className="navbar-image" src={logo} alt="pixchat logo" id="logo"/>
      </a>
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
            <a className="nav-link" href="register.html">Sign Up</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="login.html">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    ) 
  }
}
export default Navbar;