import React from 'react';
import { connect } from 'react-redux';
import { getJobs, toggleFullTime, updateLocation, updateDescription, buildFetchUrl } from '../actions';

class JobsForm extends React.Component {
  state = {
    description: '',
    location: '',
    full_time: false
  }

  toggleFullTime = () => {
    this.setState({
      ...this.state,
      full_time: !this.state.full_time
    });
    this.props.toggleFullTime(!this.state.full_time)
  }

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
    e.target.name === 'description' ? this.props.updateDescription(e.target.value) : this.props.updateLocation(e.target.value)
  }

  fetchJobs = e =>{
    e.preventDefault();
    this.props.buildFetchUrl();
    this.props.getJobs(this.props.fetchUrl);
    this.setState({
      description: '',
      location: '',
      full_time: false
    })
  };

  render() {
    return (
      <>
        <h2 className='header'>Find Tech Jobs</h2>
        <form className='form'>
          <div className='inputs'>
            <input name="description" type="text" placeholder="Description" value={this.state.description} onChange={this.handleChanges} />
            <input name="location" type="text" placeholder="Location" value={this.state.location} onChange={this.handleChanges} />
            <input className='full-time' id='ft' type="checkbox" checked={this.state.full_time} onChange={this.toggleFullTime} />
            <p>Full-Time?</p>
          </div>
          <button onClick={this.fetchJobs} type="submit" className='submit'>Search Jobs</button>
        </form>
      </>
    );
  }
};

const mapStateToProps = state => {
  return {
    description: state.description,
    location: state.location,
    full_time: state.full_time,
    fetchUrl: state.fetchUrl
  }
};

export default connect(
  mapStateToProps,
  { getJobs, toggleFullTime, updateLocation, updateDescription, buildFetchUrl }
)(JobsForm);
