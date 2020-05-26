import { FETCH_JOBS_START, FETCH_JOBS_FAIL, FETCH_JOBS_SUCCESS } from '../actions';

export const initialState = {
  jobs: [],
  error: '',
  isFetching: false
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
    default:
      return state;
  }
}
