import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { joinRoom } from '../../actions/room';
import './home.css';

export class Home extends Component {
  state = {
    roomID: '',
  };

  static propTypes = {
    roomID: PropTypes.string,
  };

  onChange = (e) => {
    this.setState({ roomID: e.target.value });
  };

  joinRoom = () => {
    this.props.joinRoom(this.state.roomID);
    this.props.history.push('/room');
  };

  render() {
    return (
      <div className='container home-container'>
        <div>
          <h1>Welcome to SimpleChat</h1>
          <p>A simple online chat service, created using React and WebRTC</p>
          <Link to='/room' className='button-primary room-link'>
            New Room
          </Link>
          <form id='home-form'>
            <input
              id='input-room-id'
              type='text'
              className='text'
              placeholder='Room ID'
              onChange={this.onChange}
            />
            <button
              className='button-secondary room-link'
              onClick={this.joinRoom}
            >
              Join Room
            </button>
          </form>
          <p id='footer'>
            <span>! This site is optimized for 1080p resolution</span>
          </p>
        </div>
        <img id='home-image' src={'/static/home.png'} alt='home' />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  room: state.room,
});

export default connect(mapStateToProps, { joinRoom })(Home);
