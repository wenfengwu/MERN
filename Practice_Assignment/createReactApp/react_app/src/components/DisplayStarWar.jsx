import React from 'react';

const DisplayStarWar = (props) => {
    if(props.selection === 'people' && !props.starWar.error){
        return (
            <div>
                <h1>{props.starWar.name}</h1>
                <p>Height: {props.starWar.height}</p>
                <p>Mass: {props.starWar.mass}</p>
                <p>Hair Color: {props.starWar.hair_color}</p>
                <p>Shin Color: {props.starWar.skin_color}</p>

            </div>
        )
    }
    else if(props.selection === 'planets' && !props.starWar.error){
        return (
            <div>
                <h1>{props.starWar.name}</h1>
                <p>Climate: {props.starWar.climate}</p>
                <p>Terrain: {props.starWar.terrain}</p>
                <p>Surface Water Color: {props.starWar.surface_water}</p>
                <p>Population: {props.starWar.population}</p>

            </div>
        )
    }
    else{
        return (
            <div>
                <h1>These are't the droids you're looking for</h1>
                <img src="https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png" alt="Obi-Wan Kenobi.jpg" />
            </div>
        )
    }
}

export default DisplayStarWar;
