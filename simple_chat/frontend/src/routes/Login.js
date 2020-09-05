import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import './login.css';

export class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.props.isAuthenticated) {
      this.props.history.goBack();
    }
    const { username, password } = this.state;
    return (
      <div className='login-container'>
        <form onSubmit={this.onSubmit} className='login-form'>
          <h2>Log In</h2>
          <input
            type='text'
            className='text'
            name='username'
            placeholder='username'
            onChange={this.onChange}
            value={username}
          />
          <br />
          <input
            type='password'
            className='text'
            name='password'
            placeholder='password'
            password='true'
            onChange={this.onChange}
            value={password}
          />
          <br />
          <input type='submit' className='button-primary' value='Login' />
          <h4>or</h4>
          <Link className='button-grey' to='/signup'>
            Sign Up
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
