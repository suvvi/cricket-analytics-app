// BallDataForm.js
import React, { useState } from'react';

const BallDataForm = () => {
  const [runsScored, setRunsScored] = useState(0);
  const [wicketStatus, setWicketStatus] = useState('');
  const [typeOfShot, setTypeOfShot] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save the metadata
    console.log('Metadata saved:', { runsScored, wicketStatus, typeOfShot });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Runs Scored:</label>
      <input type="number" value={runsScored} onChange={(event) => setRunsScored(event.target.value)} />
      <br />
      <label>Wicket Status:</label>
      <input type="text" value={wicketStatus} onChange={(event) => setWicketStatus(event.target.value)} />
      <br />
      <label>Type of Shot:</label>
      <input type="text" value={typeOfShot} onChange={(event) => setTypeOfShot(event.target.value)} />
      <br />
      <button type="submit">Save Metadata</button>
    </form>
  );
};

export default BallDataForm;
