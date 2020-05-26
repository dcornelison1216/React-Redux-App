import axios from 'axios';

export const FETCH_JOBS_START = 'FETCH_JOBS_START';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_FAIL = 'FETCH_JOBS_FAIL';

export const getJobs = (url) => dispatch => {
  dispatch({ type: FETCH_JOBS_START });
  axios
    .get(url)
    .then(res => {
      console.log('response', res)
      dispatch({ type: FETCH_JOBS_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: FETCH_JOBS_FAIL, payload: err}));
};
