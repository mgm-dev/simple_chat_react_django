import { combineReducers } from 'redux';
import errors from './errors';
import messages from './messages';
import auth from './auth';
import room from './room';
import smtp from './smtp';

export default combineReducers({
  errors,
  messages,
  auth,
  room,
  smtp,
});
