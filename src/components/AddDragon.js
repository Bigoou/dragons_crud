import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { addDragon } from "./DragonSlice";

function AddDragon() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const dragon = { name, age };
        console.log(dragon);
        if (dragon.name && dragon.age) {
            dispatch(addDragon(dragon));
        }
        setName("");
        setAge("");
        navigate("/");
    }

    return (
        <div className="add-dragon">
            <form onSubmit={handleSubmit}>
                <label>Dragon name:</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Dragon age:</label>
                <input
                    type="text"
                    required
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <button>Add Dragon</button>
            </form>
        </div>
    );
}

export default AddDragon;