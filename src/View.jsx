import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function View() {
  const location =useLocation()
  const [formData] =useState(location.state || {})
  const { name, batch } =formData

  const storedDetails=JSON.parse(localStorage.getItem("NameBatch")) || [];
 const filteredDetails=storedDetails.filter(person => person.name !== name);

  return (

    <div>
      <p>{name}</p>
      <p>{batch}</p>
    </div>

  )
}

export default View;
