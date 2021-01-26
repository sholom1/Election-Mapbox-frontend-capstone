import axios from 'axios';
import ElectionmapActionTypes from './electionmap.types';

//ACTION CREATORS

// post new electionmap
export const postElectionmap = (electionmap) => {
  return {
    type: ElectionmapActionTypes.POST_ELECTIONMAP,
    payload: electionmap,
  };
};


//THUNKS

// post electionmap thunk
export const postElectionmapThunk = (body) => (dispatch) => {
  return axios
    .post('http://localhost:8080/api/electionmap', body)
    .then((res) => res.data)
    .then((electionmap) => dispatch(postElectionmap(electionmap)))
    .catch((err) => console.log(err));
};
