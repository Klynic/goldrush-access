import React from 'react';

const CenteredInput = ({ onChange }) => {
  return (
    <div className="full-screen-container">
      <div className="background-text">PORTFOLIO TRACKER</div>
      <input
        type="text"
        placeholder="Submit Address"
        onChange={onChange}
        className="custom-input"
      />
      <div className="full-screen-content">
      </div>
    </div>
  );
};

export default CenteredInput;
