import { FETCH_JOBS_START, FETCH_JOBS_FAIL, FETCH_JOBS_SUCCESS, TOGGLE_FULL_TIME, UPDATE_DESCRIPTION, UPDATE_LOCATION } from '../actions';

export const initialState = {
  jobs: [],
  error: '',
  isFetching: false,
  description: '',
  location: '',
  full_time: false,
  fetchUrl: 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?'
};

export const jobsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_JOBS_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        jobs: action.payload,
        isFetching: false,
        error: ''
      };
    case FETCH_JOBS_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case TOGGLE_FULL_TIME:
      return {
        ...state,
        full_time: !state.full_time
      };
    case UPDATE_DESCRIPTION:
      return {
        ...state,
        description: action.payload
      }
    case UPDATE_LOCATION:
      return {
        ...state,
        location: action.payload
      }
    default:
      return state;
  }
}
