import React from "react";
import { useLocation } from "react-router-dom";

function View() {
  const location = useLocation();
  const { name, batch } = location.state || {};

  return (
    <div>
      <h1>View Person Details</h1>
      {name && batch ? (
        <>
          <p>Name: {name}</p>
          <p>Batch: {batch}</p>
        </>
      ) : (
        <p>No person details to show</p>
      )}
    </div>
  );
}

export default View;
