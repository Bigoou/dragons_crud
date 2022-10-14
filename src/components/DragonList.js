import React from "react";
import { useSelector } from "react-redux";

function DragonList() {

    const dragons = useSelector((state) => state.dragons);

    return (
        <div className="container">
            <div className="row">
                <h1>Redux CRUD Dragons app</h1>
            </div>
            <div className="row">
                <div className="two columns">
                    <button className="button-primary">Load dragons</button>
                </div>
                <div className="two columns">
                    <button className="button-primary">Add dragon</button>
                </div>
            </div>
            <div className="row">
                <table className="u-full-width">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dragons.map(({ name, age }, i) => (
                            <tr key={i}>
                                <td>{name}</td>
                                <td>{age}</td>
                                <td>
                                    <button>Delete</button>
                                    <button>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DragonList;