import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFriend } from '../../actions/profileActions';
import isEmpty from '../../validation/is-empty';

class ProfileItem extends Component {
  onAddFriendClick(id) {
    this.props.addFriend(id);
  }

  render() {
    const { profile } = this.props;
    if(profile.user == null){
      console.log("profile.user is null");
      return "";
    }
    else {
      var friendsList = "";
      if (!isEmpty(profile.user.friends)) {
        friendsList = profile.user.friends.map(user => <li> {user._id}</li>);
      }
      
    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            <img src={profile.user.avatar} alt="" className="rounded-circle" />
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{profile.user.name}</h3>
            <p>
              {profile.status}{' '}
              {isEmpty(profile.company) ? null : (
                <span>at {profile.company}</span>
              )}
            </p>
            <p>
              {isEmpty(profile.location) ? null : (
                <span>{profile.location}</span>
              )}
            </p>
            <Link to={`/profile/${profile.handle}`} className="btn btn-info">
              View Profile
            </Link>

         
            <button
              onClick={this.onAddFriendClick.bind(this, profile.user._id)}
              type="button"
              className="btn btn-info"
            > Add Friend
            </button>

           
            <p> {isEmpty(profile.user.friends) ? null : 
            (<ul>
            {
              profile.user.friends.map(function(user){
                return <li> {user._id} </li>
              })
            }
            </ul>
            )}</p>
          </div>
          </div>
      </div>
    );
  }
}
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
  addFriend: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addFriend })(
  ProfileItem
);