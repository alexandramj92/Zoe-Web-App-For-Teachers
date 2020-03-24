import React, { useReducer } from 'react';
import axios from 'axios';
import UserContext from './userContext';
import UserReducer from './userReducer';
import { GET_USER, IS_LOGGED_IN } from '../types';

const UserState = props => {
  const initialState = {
    username: 'head-teacher-01',
    _id: '5e79547bd0b2e16d87f6981a',
    isLoggedIn: true
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  // Get user data for dashboard
  const getUser = async username => {
    const res = await axios.get('/api/user');
    dispatch({
      type: GET_USER,
      payload: res.data.username
    });
  };
  // Authorize user function
  const logIn = () => dispatch({ type: IS_LOGGED_IN });
  return (
    <UserContext.Provider
      value={{
        username: state.username,
        _id: state._id,
        isLoggedIn: state.isLoggedIn,
        getUser,
        logIn
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
