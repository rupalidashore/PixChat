import React, { Component } from "react";
import { Link } from "react-router-dom";

class settings extends Component {
  render() {
    return (
      <div className="settings">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-5">Settings</h1>
              <p className="lead text-muted">
                You can modify your settings here
              </p>
              <hr />
              <div className="btn-group mb-4" role="group">
                <Link to="/changePassword" className="btn btn-light">
                  <i className="fas fa-user-circle text-info mr-1 dashboard-icon" />{" "}
                  Change password!&nbsp;&nbsp;&nbsp;
                </Link>
              </div>
             
              <div className="btn-group mb-4" role="group">
                <Link to="/edit-profile" className="btn btn-light">
                  <i className="fas fa-user-circle text-info mr-1 dashboard-icon" />{" "}
                  Edit profile!&nbsp;&nbsp;&nbsp;
                </Link>
              </div>
              <div className="btn-group mb-4" role="group">
                <Link to="/dashboard" className="btn btn-light">
                  <i className="fas fa-user-circle text-info mr-1 dashboard-icon" />{" "}
                  Delete account!&nbsp;&nbsp;&nbsp;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
};
export default settings;