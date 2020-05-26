import axios from 'axios';

export const FETCH_JOBS_START = 'FETCH_JOBS_START';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_FAIL = 'FETCH_JOBS_FAIL';
export const TOGGLE_FULL_TIME = 'TOGGLE_FULL_TIME';
export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';

export const getJobs = (url) => dispatch => {
  dispatch({ type: FETCH_JOBS_START });
  axios
    .get(url)
    .then(res => {
      console.log('response', res.data)
      dispatch({ type: FETCH_JOBS_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: FETCH_JOBS_FAIL, payload: err}));
};

export const toggleFullTime = isFullTime => dispatch => {
  dispatch({ type: TOGGLE_FULL_TIME, payload: isFullTime });
};

export const updateLocation = loc => dispatch => {
  dispatch({ type: UPDATE_LOCATION, payload: loc });
};

export const updateDescription = desc => dispatch => {
  dispatch({ type: UPDATE_DESCRIPTION, payload: desc });
};
