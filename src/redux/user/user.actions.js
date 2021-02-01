import axios from 'axios';
import UserActionTypes from './user.types';

//ACTION CREATORS

// action creator to get a user
const getUser = user => { 
  return {
    type: UserActionTypes.GET_USER,
    payload: user
  }
}

// action creator to remove a user
const removeUser = () => { 
  return { 
    type: UserActionTypes.REMOVE_USER 
  }
}

//THUNKS

export const me = () => async dispatch => {
  try {
    const res = await axios.get("https://electionmapbox.herokuapp.com/auth/me", { withCredentials: true });
    // const res = await axios.get("http://localhost:8080/auth/me", { withCredentials: true });
    dispatch(getUser(res.data || {}));
  }
  catch (err) {
    console.error(err);
  }
};

export const auth = (email, password, method) => async dispatch => {
  let res;
  try {
    res = await axios.post(`https://electionmapbox.herokuapp.com/auth/${method}`, { email, password }, { withCredentials: true });
    // res = await axios.post(`http://localhost:8080/auth/${method}`, { email, password }, { withCredentials: true });
  }
  catch (authError) {
    return dispatch(getUser({ error: authError }));
  }

  try {
    dispatch(getUser(res.data));
  }
  catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
  }
};

export const logout = () => async dispatch => {
  try {
    await axios.delete("https://electionmapbox.herokuapp.com/auth/logout", { withCredentials: true });
    // await axios.delete("http://localhost:8080/auth/logout", { withCredentials: true });
    dispatch(removeUser());
  }
  catch (err) {
    console.error(err);
  }
};

