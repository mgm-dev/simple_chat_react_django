import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { createMessage } from '../../actions/messages';
import './login.css';

export class Signup extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: '',
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    if (password !== password2) {
      this.props.createMessage({ passwordNotMatch: 'Passwords do not match' });
    } else {
      const newUser = {
        username,
        password,
        email,
      };
      this.props.register(newUser);
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to='/mypage' />;
    }
    const { username, password, email, password2 } = this.state;
    return (
      <div className='login-container'>
        <form onSubmit={this.onSubmit} className='login-form'>
          <h2>Sign Up</h2>
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
            type='email'
            className='text'
            name='email'
            placeholder='email'
            onChange={this.onChange}
            value={email}
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
          <input
            type='password'
            className='text'
            name='password2'
            placeholder='password confirm'
            password='true'
            onChange={this.onChange}
            value={password2}
          />
          <br />
          <input type='submit' className='button-primary' value='Sign Up' />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(Signup);
