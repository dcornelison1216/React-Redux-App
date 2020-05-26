import { FETCH_JOBS_START, FETCH_JOBS_FAIL, FETCH_JOBS_SUCCESS, TOGGLE_FULL_TIME, LOCATION_CHANGE, DESCRIPTION_CHANGE } from '../actions';

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
  console.log('action', action);
  console.log('state', state);
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
      console.log(state.full_time)
      return {
        ...state,
        full_time: !state.full_time
      };
    case LOCATION_CHANGE:
      return {
        ...state,
        location: state.location
      }
    case DESCRIPTION_CHANGE:
      return {
        ...state,
        description: state.description
      }
    default:
      return state;
  }
}
