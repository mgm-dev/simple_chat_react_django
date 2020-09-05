import React, { Component } from 'react';
import './contact.css';

export class Contact extends Component {
  render() {
    return (
      <div className='contact-container'>
        <form action='' className='contact-form'>
          <h2>Contact Me</h2>
          <input type='text' className='text' placeholder='your email' />
          <br />
          <select name='contact-type' id='contact-type'>
            <option value='service'>about service</option>
            <option value='employment'>about employment</option>
          </select>
          <br />
          <textarea name='' id='' cols='30' rows='10'></textarea>
          <br />
          <input type='submit' className='button-primary' value='Send' />
        </form>
      </div>
    );
  }
}

export default Contact;
