import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import { dragonUpdated } from "./DragonSlice";
import { useNavigate, useLocation } from "react-router-dom";

function EditDragon() {
    const { pathname } = useLocation();
    const dragonName = pathname.replace("/edit-dragon/", "");

    const dragon = useSelector((state) =>
        state.dragons.find((dragon) => dragon.name === dragonName)
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState(dragon.name);
    const [age, setAge] = useState(dragon.age);
    const [error, setError] = useState(null);

    const handleName = (e) => setName(e.target.value);
    const handleAge = (e) => setAge(e.target.value);

    const handleClick = () => {
        if (name && age) {
            dispatch(
                dragonUpdated({
                    name,
                    age
                })
            );

            setError(null);
            navigate("/");
        } else {
            setError("Please fill all fields");
        }

        setName("");
        setAge("");

        return (
            <div className="container">
                <div className="row">
                    <h1>Edit dragon</h1>
                </div>
                <div className="row">
                    <div className="three columns">
                        <label htmlFor="nameInput">Name</label>
                        <input
                            className="u-full-width"
                            type="text"
                            placeholder="Name..."
                            id="nameInput"
                            onChange={handleName}
                            value={name}
                        />
                        <label htmlFor="ageInput">Age</label>
                        <input
                            className="u-full-width"
                            type="number"
                            placeholder="Age..."
                            id="ageInput"
                            onChange={handleAge}
                            value={age}
                        />
                        {error && error}
                        <button onClick={handleClick} className="button-primary">
                            Save dragon
                        </button>
                    </div>
                </div>
            </div>
        );
    };
}

export default EditDragon;