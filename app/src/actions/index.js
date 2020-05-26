import axios from 'axios';

export const FETCH_JOBS_START = 'FETCH_JOBS_START';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_FAIL = 'FETCH_JOBS_FAIL';
export const TOGGLE_FULL_TIME = 'TOGGLE_FULL_TIME';
export const LOCATION_CHANGE = 'LOCATION_CHANGE';
export const DESCRIPTION_CHANGE = 'DESCRIPTION_CHANGE';

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

export const toggleFullTime = () => dispatch => {
  dispatch({ type: TOGGLE_FULL_TIME });
};

export const locationChange = () => dispatch => {
  dispatch({ type: LOCATION_CHANGE });
};

export const descriptionChange = () => dispatch => {
  dispatch({ type: DESCRIPTION_CHANGE });
};
