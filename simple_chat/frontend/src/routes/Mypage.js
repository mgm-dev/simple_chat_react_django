import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import './mypage.css';

export class Mypage extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='mypage-container'>
        <form className='mypage-content'>
          <img className='avatar-img' src={'/static/avatar.png'} alt='avatar' />
          <h3>username</h3>
          <input
            type='text'
            className='text'
            placeholder={`${this.props.auth.user.username}`}
          />
          <h3>email</h3>
          <input
            type='text'
            className='text'
            placeholder={`${this.props.auth.user.email}`}
          />
          <button className='button-primary' onClick={this.props.logout}>
            Log Out
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Mypage);
