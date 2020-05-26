import React from 'react';
import './App.css';
import JobsForm from './components/JobsForm';
import JobsList from './components/JobsList';

function App() {
  return (
    <div className="App">
      <JobsForm />
      <JobsList />
    </div>
  );
}

export default App;
