import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class  Login extends Component {
    render() {
        return (
            <div>
                 <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">Sign in to your PixChat account</p>
              <form action="dashboard.html">
                <div className="form-group">
                  <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" />
                </div>
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
            </div>
        )
    }
}

export default  Login;