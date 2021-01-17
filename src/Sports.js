import facade from "./apiFacade";
import React, { useState, useEffect } from "react";
import "./style.css";

const Sports = () => {
    const [SportsData, setSportsData] = useState("");

    useEffect(() => {
        facade.fetchAllSports().then((data) => setSportsData(data.all));
    }, []);

    return (
        <div>
            <table className="table-user">

                <tr>
                    <th>Sport Name</th>
                    <th>Description</th>
                </tr>
            </table>
            {

                SportsData && SportsData.map((sport, i) => {
                    return (
                        <div key={i}>
                            <table className="table-user">
                                <tr>
                                    <td>{sport.sportName}</td>
                                    <td>{sport.sportDescription}</td>
                                </tr>
                            </table>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Sports;