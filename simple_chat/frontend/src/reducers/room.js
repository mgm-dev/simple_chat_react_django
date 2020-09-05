import { NEW_ROOM, JOIN_ROOM, RESET_ROOM } from '../../actions/types';

const initialState = {
  roomID: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case NEW_ROOM:
      return {
        ...state,
        roomID: null,
      };
    case JOIN_ROOM:
      return {
        ...state,
        roomID: action.payload,
      };
    case RESET_ROOM:
      return {
        ...state,
        roomID: null,
      };
    default:
      return state;
  }
}
