import facade from "./apiFacade";
import React, { useState } from "react";
import "./style.css";
import "bootstrap";

const EditSportTeam = ({ sportTeamId }) => {
    const initialValue = {
        pricePerYear: "0",
        teamName: "",
        minAge: "0",
        maxAge: "0"
    };

    const [newSportTeam, setNewSportTeam] = useState(initialValue);

    const handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setNewSportTeam({ ...newSportTeam, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        facade.fetchEditSportTeam(newSportTeam, sportTeamId);
        setNewSportTeam(initialValue);
    };


    return (
        <form onSubmit={handleSubmit}>
            Edit price per year
            <input
                name="pricePerYear"
                value={newSportTeam.pricePerYear}
                onChange={handleChange}
            />
            <br />
            Edit team name
            <input
                name="teamName"
                value={newSportTeam.teamName}
                onChange={handleChange}
            />
            <br />
            Edit minimum age
            <input            
                name="minAge"
                value={newSportTeam.minAge}
                onChange={handleChange}
            />
            <br />
            Edit maximum age
            <input
                name="maxAge"
                value={newSportTeam.maxAge}
                onChange={handleChange}                
            />
            <br />

            <button className="button buttonCategory buttonSort" type="submit" value="Submit">Edit</button>

        </form>

    );
};

export default EditSportTeam;