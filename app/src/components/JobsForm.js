import React from 'react';
import { connect } from 'react-redux';
import { getJobs, toggleFullTime, locationChange, descriptionChange } from '../actions';

const JobsForm = props => {
  const fetchJobs = e =>{
    e.preventDefault();
    console.log('props', props)
    props.getJobs(props.fetchUrl);
  };

  return (
    <>
      <h2>Find Tech Jobs</h2>
      <form>
        <input type="text" placeholder="Description" onChange={descriptionChange} /><br />
        <input type="text" placeholder="Location" onChange={locationChange} /><br />
        <input label="Full-Time" type="checkbox" name="isFullTime" checked={props.full_time} onChange={toggleFullTime} />Full-Time?<br />
        <button onClick={fetchJobs} type="submit">Search Jobs</button>
      </form>
    </>
  );
};

const mapStateToProps = state => ({
  jobs: state.jobs,
  error: state.error,
  fetchUrl: state.fetchUrl
});

export default connect(
  mapStateToProps,
  { getJobs, toggleFullTime, locationChange, descriptionChange }
)(JobsForm);
