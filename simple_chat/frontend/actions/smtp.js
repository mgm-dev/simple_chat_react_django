import axios from 'axios';
import { createMessage } from './messages';
import Cookies from 'js-cookie';

import { EMAIL_SUCCESS, EMAIL_FAIL, EMAIL_SENDING } from './types';

export const sendEmail = (email, message, subject) => (dispatch) => {
  dispatch({ type: EMAIL_SENDING });

  const token = Cookies.get('csrftoken');

  // Request Header
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': token,
    },
  };
  // Request body
  const body = JSON.stringify({ email, message, subject });

  axios
    .post('/smtp', body, config)
    .then((res) => {
      dispatch({ type: EMAIL_SUCCESS });
      dispatch(createMessage({ emailSent: 'Email was sent' }));
    })
    .catch((err) => {
      dispatch({ type: EMAIL_FAIL });
      dispatch(createMessage({ emailFail: 'Please again try later' }));
    });
};
