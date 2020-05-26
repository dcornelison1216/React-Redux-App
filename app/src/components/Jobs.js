import React from 'react';
import { connect } from 'react-redux';
import { getJobs } from '../actions';

const JobsList = props => {
  const fetchJobs = e =>{
    e.preventDefault();
    props.getJobs('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?');
  };

  return (
    <>
      <h2>Fetch some jobs!</h2>
      <button onClick={fetchJobs}>Fetch Jobs!</button>
    </>
  );
};

const mapStateToProps = state => ({
  jobs: state.jobs,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getJobs }
)(JobsList);
