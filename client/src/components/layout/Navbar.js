import React, { Component } from 'react';
import logo from '../../image/logo_image_blue_pixchat.png'
import {Link }from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../../actions/authActions';

 class Navbar extends Component {
  //logout function
  onLogoutClick(e){
      e.preventDefault();
      this.props.logoutUser(); //call the action

  }
render() {
   //read the props,
   //Deconstructing with isAuthenticated and user
    const {isAuthenticated, user}= this.props.auth;

    //When comes as  an guest(User is not logged in )
    const guestLinks = (
    <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link anchorTagText" to="/register">Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link anchorTagText" to="/login">Login</Link>
        </li>
    </ul>
    );
      // When logged in then shows this html(dashboard,post feed,log out with the image of an avator)
    const authLinks = (
      <ul className="navbar-item nav">
        <li className="nav-item">
          <Link className="nav-link" 
                    to="/feed"
                    id='nav-link'
                  data-toggle="tooltip"
                  title="Post Feed"
                >
                  <i className='fas iconColor fa-home'></i>
          </Link>
        </li>

        <li className='nav-item nav'>
                <Link
                  className='nav-link d-md-block '
                  to='/profiles'
                  id='nav-link'
                  data-toggle="tooltip"
                  title="All Profiles"
                >
                  <i className="fas iconColor fa-users"></i>
                </Link>
              </li>
        <li className='nav-item nav'>
                <Link
                  className='nav-link d-md-block '          
                  to='/settings'
                  id='nav-link'
                  data-toggle="tooltip"
                  title="Account Settings"
                >
                  <i className='fa iconColor fa-cog'></i>
                </Link>
              </li>
        <li className="nav-item">
          <Link className="nav-link iconColor" to="/dashboard">
            View Profile
          </Link>
        </li>
        <li className="nav-item  ">

          <Link className="nav-link iconColor" to = "" onClick ={this.onLogoutClick.bind(this)}
          
            
          >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "25px", marginRight: "5px" }}
              title="You must have a gravatar connected to your email to display an image"
            />
            Logout
          </Link>
        </li>
      </ul>
    );
   
    return (
     <nav className="navbar navbar-expand-sm navbar-dark  mb-4">
    <div className="container">
      {/* <a className="navbar-brand" href="landing.html">pixchatapp</a> */}
      <Link  className="navbar-brand" to="/">
        <img className="navbar-image" src={logo} alt="pixchat logo" id="logo"/>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="mobile-nav">
        
        
       {isAuthenticated ? authLinks : guestLinks}  
      
      </div>
    </div>
  </nav>
    ) 
  }
}

//This is how we integrated our navbar with redux store
Navbar.propTypes = {
  logoutUser : PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
  
};

    
const mapStateToProps = (state)=> ({
  auth : state.auth, // looking for auth data in redux state
 
})
export default connect(mapStateToProps, {logoutUser})(Navbar);
