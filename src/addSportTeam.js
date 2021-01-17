import facade from "./apiFacade";
import React, { useState } from "react";
import "./style.css";
import "bootstrap"

const AddSportTeam = ({ sportName }) => {
    const initialValue = {
        pricePerYear: "",
        teamName: "",
        minAge: "",
        maxAge: ""
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
        facade.fetchAddSportTeam(newSportTeam, sportName);
        setNewSportTeam(initialValue);
    };


    return (
        <form onSubmit={handleSubmit}>

            <input
                name="pricePerYear"
                value={newSportTeam.pricePerYear}
                onChange={handleChange}
                placeholder="Add price per year"
            />
            <br />
            <input
                name="teamName"
                value={newSportTeam.teamName}
                onChange={handleChange}
                placeholder="Add team name"
            />
            <br />
            <input
                name="minAge"
                value={newSportTeam.minAge}
                onChange={handleChange}
                placeholder="Add minimum age"
            />
            <br />
            <input
                name="maxAge"
                value={newSportTeam.maxAge}
                onChange={handleChange}
                placeholder="Add maximum age"
            />
            <br />

            <button className="button buttonCategory buttonSort" type="submit" value="Submit">Add</button>

        </form>

    );
};

export default AddSportTeam;