import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendEmail } from '../../actions/smtp';
import PropTypes from 'prop-types';
import './contact.css';

export class Contact extends Component {
  state = {
    email: '',
    message: '',
    subject: 'service',
  };

  static propTypes = {
    sendEmail: PropTypes.func.isRequired,
    isSending: PropTypes.bool,
    message: PropTypes.object.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.props.isSending) {
      this.props.sendEmail(
        this.state.email,
        this.state.message,
        this.state.subject
      );
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidUpdate(prevProps) {
    const { message } = this.props;
    if (message !== prevProps.message) {
      if (message.emailSent) {
        this.setState({ email: '', message: '', subject: 'service' });
      }
    }
  }

  render() {
    const { email, message, subject } = this.state;
    return (
      <div className='contact-container'>
        <form onSubmit={this.onSubmit} className='contact-form'>
          <h2>Contact Me</h2>
          <input
            name='email'
            type='text'
            className='text'
            placeholder='your email'
            onChange={this.onChange}
            value={email}
          />
          <br />
          <select
            name='subject'
            id='contact-type'
            onChange={this.onChange}
            value={subject}
          >
            <option value='service'>about service</option>
            <option value='employment'>about employment</option>
          </select>
          <br />
          <textarea
            name='message'
            id=''
            cols='30'
            rows='10'
            placeholder='message'
            onChange={this.onChange}
            value={message}
          ></textarea>
          <br />
          <input type='submit' className='button-primary' value='Send' />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isSending: state.smtp.isSending,
  message: state.messages,
});

export default connect(mapStateToProps, { sendEmail })(Contact);
