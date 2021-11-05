import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchStarWars = () => {
    const [selection, setSelection] = useState("people");
    const [id, setId] = useState("")

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selection, id)
        history.push(`/${selection}/${id}`)
    }

    // const requestAPI = () => {
    //     axios.get(`https://swapi.dev/api/${selection}/${id}`)
    //         .then(response => setStarWar(response.data))
    //         .catch(error => setStarWar({error: "error"}))
    // }


    return (
        <div>
            <form onSubmit = {e =>handleSubmit(e)}>
                <span style = {{margin: "20px"}}>
                    <label>Search For: </label>
                    <select value = {selection} onChange = {e => setSelection(e.target.value)}>
                        <option value="people">people</option>
                        <option value="planets">planets</option>
                        <option value="starships">starships</option>
                    </select>
                </span>
                <span style = {{margin: "20px"}}>
                    <label>ID: </label>
                    <input type="text" onChange = {e => setId(e.target.value)} />
                </span>
                <button>Search</button>
            </form>
            <hr />
        </div>
    )
}

export default SearchStarWars;
