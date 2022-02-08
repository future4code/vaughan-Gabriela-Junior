import React, {useState, useEffect} from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";

const App = () => {

  const [pokeName, setPokeName] = useState("");
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => getPokemon(), [])

  const getPokemon = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=151"
    
    try {
      const response = await axios.get(url)
      setPokeList(response.data.results)

    } catch (error) {
      console.log(error)
    }
  };

  const changePokeName = event => {
    setPokeName(event.target.value);
  };

    return (
      <div className="App">
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
    );
  }

export default App;