import React from 'react';
import { connect } from 'react-redux';

class JobsForm extends React.Component {



  render() {
    const jobs = this.props.jobs
    return (
      <div>
        {jobs.map((job, index) => (
          <div key={index} className='job'>
            <div className='details'>
              <h2 className='company'><a href={job.company_url}>{job.company}</a></h2>
              <p className='job-title'>Job Title: <a href={job.url}>{job.title}</a>{job.type ? ` (${job.type})` : null}</p>
              <p>Location: {job.location}</p>
            </div>
            <img src={job.company_logo} alt='logo' className='logo' />

          </div>
        ))}
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    jobs: state.jobs
  }
};

export default connect(
  mapStateToProps,
  {}
)(JobsForm);
