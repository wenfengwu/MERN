import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
import axios from 'axios'


const DisplayStarWar = (props) => {

    const {userSelection, userId} = useParams();
    const [infos, setInfos] = useState({});
    const history = useHistory()

    useEffect( () => {
        axios.get(`https://swapi.dev/api/${userSelection}/${userId}/`)
            .then(res => {
                console.log(res.data);
                setInfos(res.data);
            })
            .catch(err => {
                console.log(err);
                setInfos({error: "These are not the droids you are looking for..."})
            })
    }, [userSelection, userId]);

    

    const fetchHomeworld = (e) => {
        e.preventDefault();
        let planetId = infos.homeworld.replace(/\D/g, "");
        console.log(planetId);
        history.push(`/planets/${planetId}`);
    }


    if(userSelection === 'people' && !infos.error){
        console.log(infos.homeworld)
        return (
            <div>
                <h1>{infos.name}</h1>
                <p>Height: {infos.height}</p>
                <p>Mass: {infos.mass}</p>
                <p>Hair Color: {infos.hair_color}</p>
                <p>Shin Color: {infos.skin_color}</p>
                <button onClick = {e => fetchHomeworld(e)}>Homeworld: {infos.homeworld}</button>
            </div>
        )
    }
    else if(userSelection === 'planets' && !infos.error){
        return (
            <div>
                <h1>{infos.name}</h1>
                <p>Climate: {infos.climate}</p>
                <p>Terrain: {infos.terrain}</p>
                <p>Surface Water Color: {infos.surface_water}</p>
                <p>Population: {infos.population}</p>
            </div>
        )
    }
    else if(userSelection === 'starships' && !infos.error){
        return (
            <div>
                <h1>{infos.name}</h1>
                <p>Model: {infos.model}</p>
                <p>Length: {infos.length}</p>
                <p>Crew: {infos.crew}</p>
                <p>Passengers: {infos.passengers}</p>
            </div>
        )
    }
    else{
        return (
            <div>
                <h1>{infos.error}</h1>
                <img src="https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png" alt="Obi-Wan Kenobi.jpg" />
            </div>
        )
    }
}

export default DisplayStarWar;
