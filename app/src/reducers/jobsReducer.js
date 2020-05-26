import {
  FETCH_JOBS_START,
  FETCH_JOBS_FAIL,
  FETCH_JOBS_SUCCESS,
  TOGGLE_FULL_TIME,
  UPDATE_DESCRIPTION,
  UPDATE_LOCATION,
  BUILD_FETCH_URL
} from '../actions';

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
      console.log(action.payload)
      return {
        ...state,
        full_time: action.payload
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
    case BUILD_FETCH_URL:
      const url = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?';
      const desc = state.description;
      const loc = state.location;
      let newUrl = url;
      if(desc.length > 0) {
        newUrl = newUrl + '&description=' + desc
      }
      if(loc.length > 0) {
        newUrl = newUrl + '&location=' + loc
      }
      if(state.full_time) {
        newUrl = newUrl + '&full_time=true'
      } else if(!state.full_time) {
        newUrl = newUrl + '&full_time=false'
      }
      return {
        ...state,
        fetchUrl: newUrl
      }
    default:
      return state;
  }
}
