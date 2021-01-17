import facade from "./apiFacade";
import React, { useState } from "react";
import "./style.css";
import "bootstrap"

const AddSport = () => {

  const initialValue = {
    sportName: "",
    sportDescription: ""
  };

  const [newSport, setNewSport] = useState(initialValue);

  const handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setNewSport({ ...newSport, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    facade.fetchAddSport(newSport);
    setNewSport(initialValue);
  };


  return (
    <form onSubmit={handleSubmit}>

      <input
        name="sportName"
        value={newSport.sportName}
        onChange={handleChange}
        placeholder="Add sportname"
      />
      <br />
      <input
        name="sportDescription"
        value={newSport.sportDescription}
        onChange={handleChange}
        placeholder="Add description"
      />
      <br />

      <button className="button buttonCategory buttonSort" type="submit" value="Submit">Add</button>

    </form>

  );
};

export default AddSport;



