import React, { Component } from 'react'
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {loginUser} from '../../../actions/authActions';
import TextFieldGroup from '../../common/TextFieldGroup';
import { Link } from 'react-router-dom';


class Login extends Component {
  constructor() {
    super();
    //Local state
    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(user);
  }
  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated){
      this.props.history.push('/dashboard');
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">Sign in to your Pixchat account</p>
              <form noValidate onSubmit={this.onSubmit.bind(this)}>
              <TextFieldGroup
                  placeholder = "Email Address"
                  name= "email"
                  type= "email"
                  value= {this.state.email} 
                  onChange= {this.onChange.bind(this)}
                  error = {errors.email}
                  />

              <TextFieldGroup
                  placeholder = "Password"
                  name= "password"
                  type= "password"
                  value= {this.state.password} 
                  onChange= {this.onChange.bind(this)}
                  error = {errors.password}
                  />
              <input type="submit" className="btn btn-info btn-block mt-4" />
              <Link to="/forgotPassword">
                    <button
                      type="button"
                      class="btn btn-default btn-lg btn-block"
                    >
                      Forgot Password?
                    </button>
                  </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}         
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  auth: state.auth
});

export default connect(mapStateToProps, { loginUser })(Login);