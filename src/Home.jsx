import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const savedDetails = JSON.parse(localStorage.getItem("NameBatch")) || [];
    setDetails(savedDetails);
  }, []);

  const handleAddPerson = () => {
    navigate("/create");
  };

  const handleViewPerson = (person) => {
    navigate("/view", { state: person });
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleAddPerson}>Add Person</button>
      <h2>Persons</h2>
      {details.length > 0 ? (
        details.map((detail, index) => (
          <div key={index}>
            <p>
              {index + 1}. {detail.name}
            </p>
            <button onClick={() => handleViewPerson(detail)}>View</button>
          </div>
        ))
      ) : (
        <p>No details</p>
      )}
    </div>
  );
}

export default Home;
