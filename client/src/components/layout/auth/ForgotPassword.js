import React, {Component} from 'react';
import axios from 'axios';
import classnames from 'classnames';

class ForgotPassword extends Component {
  constructor() {
    super();
    //Local state
    this.state = {
      email: '',
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
    };

    axios
      .post('/api/users/forgotPassword', user)
      .then((res) => console.log(res.data))
      .catch((err) => this.setState({ errors: err.response.data }));
  }
  render() {
    const { errors } = this.state;
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Forgot password</h1>
            <p className='lead text-center'>Check your email to get temporary password</p>
            <form noValidate onSubmit={this.onSubmit}>
              <div className='form-group'>
                <input
                  type='email'
                  className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.email,
                  })}
                  placeholder='Email Address'
                  name='email'
                  value={this.state.email}
                  onChange={this.onChange}
                />
                {errors.email && (
                  <div className='invalid-feedback'>{errors.email}</div>
                )}
              </div>
              <input type='submit' className='btn appButtons text-white btn-block mt-4' />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default ForgotPassword;