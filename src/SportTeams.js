import facade from "./apiFacade";
import React, { useState, useEffect } from "react";
import "./style.css";

const SportTeams = () => {
    const [SportTeamsData, setSportTeamsData] = useState("");

    useEffect(() => {
        facade.fetchAllSportTeams().then((data) => setSportTeamsData(data.all));
    }, []);

    return (
        <div>
            <table className="table-user">

                <tr>
                    <th>Team Name</th>
                    <th>Description</th>
                </tr>
            </table>
            {

                SportTeamsData && SportTeamsData.map((sportTeam, i) => {
                    return (
                        <div key={i}>
                            <table className="table-user">
                                <tr>
                                    <th rowSpan="4">{sportTeam.teamName}</th>
                                </tr>
                                <tr>
                                    <td>Price per year: {sportTeam.pricePerYear}</td>
                                </tr>
                                <tr>
                                    <td>Minimum age: {sportTeam.minAge}</td>
                                </tr>
                                <tr>
                                    <td>Maximum age: {sportTeam.maxAge}</td>
                                </tr>
                             </table>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default SportTeams;