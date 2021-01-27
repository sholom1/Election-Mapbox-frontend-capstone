import UserActionTypes from './user.types';

// REDUCER
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionTypes.GET_USER:
      return action.payload;
    case UserActionTypes.REMOVE_USER:
      return {};
    default:
      return state;
  }
}

export default userReducer;
