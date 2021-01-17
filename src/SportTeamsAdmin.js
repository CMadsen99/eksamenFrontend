import facade from "./apiFacade";
import EditSportTeam from "./editSportTeam";
import React, { useState, useEffect } from "react";
import "./style.css";

const SportTeamsAdmin = () => {
    const [sportTeamsData, setSportTeamsData] = useState("");

    useEffect(() => {
        facade.fetchAllSportTeams().then((data) => setSportTeamsData(data.all));
    }, []);

    const handleDeleteSportTeam = (id) => {
        facade.fetchDeleteSportTeam(id).then(facade.fetchAllSportTeams().then((data) => setSportTeamsData(data.all)));
    }    

    return (
        <div>
            <table className="table-user">
                <tr>
                    <th>Team Name</th>
                    <th>Description</th>
                    <th>Edit Team</th>
                    <th>Delete Team</th>
                </tr>
            </table>
            {

                sportTeamsData && sportTeamsData.map((sportTeam, i) => {
                    return (
                        <div key={i}>
                            <table className="table-user">
                                <tr>
                                    <th>{sportTeam.teamName}</th>
                                    <td>
                                        Price per year: {sportTeam.pricePerYear}<br></br>
                                        Minimum age: {sportTeam.minAge}<br></br>
                                        Maximum age: {sportTeam.maxAge}
                                    </td>
                                    <th>{sportTeamsData && <EditSportTeam sportTeamId={sportTeam.id} />}</th>
                                    <th>{sportTeamsData && <button className="button buttonCategory buttonSort" onClick={() => handleDeleteSportTeam(sportTeam.id)}>DELETE</button>}</th>
                                </tr>
                            </table>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default SportTeamsAdmin;