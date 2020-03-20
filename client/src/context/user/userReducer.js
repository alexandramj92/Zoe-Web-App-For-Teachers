import { GET_USER, IS_LOGGED_IN } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        username: action.payload
      };
    case IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true
      };
    default:
      return state;
  }
};
