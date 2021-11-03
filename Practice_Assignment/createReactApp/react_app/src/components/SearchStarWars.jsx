import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import DisplayStarWar from "./DisplayStarWar";

const SearchStarWars = () => {
    const [starWar, setStarWar] = useState({});
    const [selection, setSelection] = useState("people");
    const [id, setId] = useState("")

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selection, id);
        requestAPI();
        history.push(`/${selection}/${id}`)
    }

    const requestAPI = () => {
        axios.get(`https://swapi.dev/api/${selection}/${id}`)
            .then(response => setStarWar(response.data))
            .catch(error => setStarWar({error: "error"}))
    }

    const showDisplay = () => {
        <DisplayStarWar starWar = {starWar} selection = {selection} id = {id}/>
    }

    return (
        <div>
            <form onSubmit = {e =>handleSubmit(e)}>
                <span style = {{margin: "20px"}}>
                    <label>Search For: </label>
                    <select value = {selection} onChange = {e => setSelection(e.target.value)}>
                        <option value="people">people</option>
                        <option value="planets">planets</option>
                    </select>
                </span>
                <span style = {{margin: "20px"}}>
                    <label>ID: </label>
                    <input type="text" onChange = {e => setId(e.target.value)} />
                </span>
                <button>Search</button>
            </form>
            <hr />
            {starWar.name === "" ? <p></p> : <DisplayStarWar starWar = {starWar} selection = {selection} id = {id}/>}
        </div>
    )
}

export default SearchStarWars;
