import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

function DragonList() {

    const dragons = useSelector((state) => state.dragons);

    // Route to AddDragon component

    

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
                <a href="/add-dragon">Add Dragon</a>
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
                                    <Link to={`/edit-dragon/${name}`}>
                                        <button>Edit</button>
                                    </Link>
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