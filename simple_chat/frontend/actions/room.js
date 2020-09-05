import { NEW_ROOM, JOIN_ROOM, RESET_ROOM } from './types';

export const joinRoom = (roomID) => {
  return {
    type: JOIN_ROOM,
    payload: roomID,
  };
};

export const newRoom = () => {
  return {
    type: NEW_ROOM,
  };
};

export const resetRoom = () => {
  return {
    type: RESET_ROOM,
  };
};
