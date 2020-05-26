import React from 'react';
import { connect } from 'react-redux';
import { getJobs, toggleFullTime, updateLocation, updateDescription } from '../actions';

class JobsForm extends React.Component {
  state = {
    description: '',
    location: '',
    full_time: false
  }

  handleChanges = e => {
    e.preventDefault();
    console.log(this.props)
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }

  fetchJobs = e =>{
    console.log('this.props.fetchUrl', this.props.fetchUrl)
    e.preventDefault();
    this.props.getJobs(this.props.fetchUrl);
  };

  render() {
    return (
      <>
        <h2>Find Tech Jobs</h2>
        <form>
          <input name="description" type="text" placeholder="Description" value={this.state.description} onChange={this.handleChanges} /><br />
          <input name="location" type="text" placeholder="Location" value={this.state.location} onChange={this.handleChanges} /><br />
          <input name="full_time" type="checkbox" checked={this.state.full_time} onChange={this.props.toggleFullTime} />Full-Time?<br />
          <button onClick={this.fetchJobs} type="submit">Search Jobs</button>
        </form>
      </>
    );
  }
};

const mapStateToProps = state => {
  console.log(state);
  return {
    description: state.description,
    location: state.location,
    full_time: state.full_time,
    fetchUrl: state.fetchUrl
  }
};

export default connect(
  mapStateToProps,
  { getJobs, toggleFullTime, updateLocation, updateDescription }
)(JobsForm);
