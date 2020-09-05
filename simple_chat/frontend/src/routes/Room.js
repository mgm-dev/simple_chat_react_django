import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetRoom } from '../../actions/room';
import './room.css';
import { v4 as uuidv4 } from 'uuid';

export class Room extends Component {
  render() {
    const { username } = this.props;
    let roomID = uuidv4();
    if (this.props.roomID !== null) {
      roomID = this.props.roomID;
    }

    return (
      <div className='iframe-container'>
        <iframe
          src={`http://localhost:3000/?room=${roomID}&name=${username}`}
          allow='camera *;microphone *'
          frameBorder='0'
        ></iframe>
      </div>
    );
  }

  componentWillUnmount() {
    this.props.resetRoom();
  }
}

const mapStateToProps = (state) => ({
  roomID: state.room.roomID,
  username: state.auth.user.username,
});

export default connect(mapStateToProps, { resetRoom })(Room);
