import { EMAIL_FAIL, EMAIL_SENDING, EMAIL_SUCCESS } from '../../actions/types';

const initialState = {
  isSending: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case EMAIL_SENDING:
      return {
        ...state,
        isSending: true,
      };
    case EMAIL_SUCCESS:
    case EMAIL_FAIL:
      return {
        ...state,
        isSending: false,
      };
    default:
      return state;
  }
}
