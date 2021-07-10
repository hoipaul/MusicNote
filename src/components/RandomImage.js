import React, {useState, useEffect} from "react";
import axios from "axios";

function RandomImage(props) {
    const [randomPic, setRandomPic] = useState(null);

    useEffect(() => {

        async function getImage() {
            const response = await axios.get(`https://api.unsplash.com/search/photos/random`);
            // `https://pokeapi.co/api/v2/pokemon/${props.nameOfPokemon}`
            console.log(response.data);
            setRandomPic(response.data);
        }

        getImage(); // functie wordt aangeroepen
    }, []);

    return (
        <div>
            {randomPic}
            {/*{pokemon ? (*/}
            {/*    <div><h1>*/}
            {/*        {pokemon.name}*/}
            {/*    </h1>*/}
            {/*        <div>Moves: {pokemon.moves.length}</div>*/}
            {/*        <br/>*/}
            {/*        <div>Weight: {pokemon.weight}</div>*/}
            {/*        <div>{pokemon.abilities.map((ability) => {*/}
            {/*            console.log(ability); // { ability: { name: "stomp" }}*/}
            {/*            return <p>Ability: {ability.ability.name}</p>;*/}
            {/*        })}</div>*/}
            {/*        <img src={pokemon.sprites.front_default} alt="pokemonplaatje"/>*/}
            {/*    </div>) : (<h3>loading</h3>)}*/}
        </div>
    );
}

export default RandomImage;