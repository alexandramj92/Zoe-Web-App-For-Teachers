import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
    USER_LOADED,
    ACTIVE_USER,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../types';

const AuthState = props => {
    const initialState = {
        isAuthenticated: null,
        loading: true,
        user: null,
        id: null,
        error: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    // Load User
    const loadUser = async () => {
        try {
            const res = await axios.get('/api/authenticated')
            // console.log(res.data)
            dispatch({
                type: USER_LOADED,
                payload: res.data.user
            })
        } catch (err) {
            dispatch({ type: AUTH_ERROR });
        }
    }

    // Active User
    const activeUser = () => {
      if (state.user) {
        const username = localStorage.getItem('user');
        const userId = localStorage.getItem('id');
        dispatch({
          type: ACTIVE_USER,
          payload: {username, userId}
        })
      } else {
        return state;
      }
    }

    // Login User
    const login = async formData => {
        const config = {
            headers: {
              'Content-Type': 'application/json'
        }}
        try {
            const res = await axios.post('/api/login', formData, config);
            dispatch({
              type: LOGIN_SUCCESS,
              payload: res.data
            });

            loadUser(true);
          } catch (err) {
            dispatch({
              type: LOGIN_FAIL,
              payload: err
            });
          }
    }
    // Register User
    // Logout User
    const logout = async () => {
      try {
        const res = await axios.get('api/logout')
        dispatch({ type: LOGOUT, payload: res.data});
      }
      catch(err) {
        dispatch({
          type: LOGIN_FAIL,
          payload: err
        })
      }
    }

    return (
        <AuthContext.Provider
        value={{
          isAuthenticated: state.isAuthenticated,
          loading: state.loading,
          user: state.user,
          error: state.error,
          loadUser,
          login,
          logout,
          activeUser
        }}
      >
        {props.children}
      </AuthContext.Provider>
    )
}

export default AuthState;