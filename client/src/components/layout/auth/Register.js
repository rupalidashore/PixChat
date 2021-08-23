import React, { Component } from 'react'
import {connect} from 'react-redux';
//import axios from 'axios' ;
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {registerUser} from '../../../actions/authActions';
import {withRouter} from 'react-router-dom';

class Register extends Component {
  // Register is child class, Component is parent client
  // constructor is 1st phase of lifecycle, you can add customization to component before it is rendered
    constructor(){
        super();  // this.state object is available for every component by default, where you can data for that components lifecycle
        this.state = {
            name: '',
            email: '', 
            password: '',
            password2:'',
            errors: {} // api will return error information
        }
    }

    onChange(e){ // e is the input from the textbox

     this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e){ // onSubmit will fire the API call
      // e is the entire form
        e.preventDefault(); //prevent automatic refresh of the page

      const newUser = {
          name: this.state.name, 
          email:this.state.email,
          password: this.state.password,
          password2: this.state.password2
      };

     // axios
      //  .post('/api/users/register', newUser)
     //   .then(res=>console.log(res.data))
      //  .catch(err=> this.setState({errors : err.response.data}));

    
    this.props.registerUser(newUser, this.props.history);

    }

   componentWillReceiveProps(nextProps) {
     if(nextProps.errors){
       this.setState({errors: nextProps.errors});
     }
   }





    render() {

      const errors = this.state.errors; //created a local variable that will access the errors object in state
      //const {errors} = this.state; // this is a type of deconstruction
        const {user} = this.props.auth;
      
      return  (
          <div className="register">
            {user ? user.name : null}
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Sign Up</h1>
                <p className="lead text-center">Create your DevConnector account</p>
                <form noValidate onSubmit={this.onSubmit.bind(this)}>
                  <div className="form-group">
                    <input type="text" 
                    className={classnames('form-control form-control-lg', {'is-invalid': errors.name})} //classnames is a library that allows conditional styling
                    placeholder="Name"
                    name="name" // name of textbox is name because API is expected a key named name
                    value={this.state.name} 
                    onChange={this.onChange.bind(this)} //onChange is event on textbox
                    />
                    {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>)}
                  </div>
                  <div className="form-group">
                    <input type="email" // name of textbox is email because API is expecting a key named email
                    className={classnames('form-control form-control-lg', {'is-invalid': errors.email})}
                     placeholder="Email Address" name="email"
                    value={this.state.email} 
                    onChange={this.onChange.bind(this)}
                     />
                    <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
                    {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>)}
                    </div>
                  <div className="form-group">
                    <input type="password"
                    className={classnames('form-control form-control-lg', {'is-invalid': errors.password})}
                      placeholder="Password"
                      name="password"
                    value={this.state.password} 
                    onChange={this.onChange.bind(this)}
  
                     />
                    {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>)}
                  </div>
                  <div className="form-group">
                    <input type="password"
                    className={classnames('form-control form-control-lg', {'is-invalid': errors.password2})}
                      placeholder="Confirm Password"
                       name="password2"
                    value={this.state.password2} 
                    onChange={this.onChange.bind(this)}
                   
                    />
                    {errors.password2 && (
                    <div className="invalid-feedback">{errors.password2}</div>)}
                  </div>
                  <input type="submit" className="btn btn-info btn-block mt-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
          )
        }
      }
      
Register.propTypes = {
  registereUser : PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
  
};

    
const mapStateToProps = (state)=> ({
  auth : state.auth, // looking for auth data in redux state
  errors: state.errors
})
export default connect(mapStateToProps, {registerUser})(withRouter(Register));
