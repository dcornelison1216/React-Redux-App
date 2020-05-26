import React from 'react';
import { connect } from 'react-redux';
import { getJobs, toggleFullTime, updateLocation, updateDescription } from '../actions';

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
    this.props.toggleFullTime(this.state.full_time)
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
    console.log('this.props.fetchUrl', this.props.fetchUrl)
    e.preventDefault();
    const loc = this.props.location;
    const desc = this.props.description;
    const url = this.props.fetchUrl;
    let newUrl = url;
    if(desc.length > 0) {
      if(loc.length > 0) {
        newUrl = newUrl + 'description=' + desc + '&location=' + loc
      }
    }
    console.log('newUrl', newUrl)
    this.props.getJobs(this.props.fetchUrl);
  };

  render() {
    return (
      <>
        <h2>Find Tech Jobs</h2>
        <form>
          <input name="description" type="text" placeholder="Description" value={this.state.description} onChange={this.handleChanges} /><br />
          <input name="location" type="text" placeholder="Location" value={this.state.location} onChange={this.handleChanges} /><br />
          <input name="full_time" type="checkbox" checked={this.state.full_time} onChange={this.toggleFullTime} />Full-Time?<br />
          <button onClick={this.fetchJobs} type="submit">Search Jobs</button>
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
  { getJobs, toggleFullTime, updateLocation, updateDescription }
)(JobsForm);
