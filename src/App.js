import React, {useState, useEffect} from 'react';
import Stats from './components/Stats';
import './App.css';
import axios from "axios";

const App = () => {

  const [pokemon, setPokemon] = useState("bulbasaur");
  const [pokemonData, setPokemonData] = useState([]);
 // const [pokemonType, setPokemonType] = useState("");
  const [pokemonType, setPokemonType] = useState([]);
  const [pokemonType2, setPokemonType2] = useState([]);
  // const [pokemonStatName, setPokemonStatName] = useState("");

  const getPokemon = async () => {
    const toArray = [];
    try{
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
   
      setPokemonType(res.data.types[0].type.name);
      //setPokemonType2(res.data.types[1].type.name);
      {(res.data.types.length)==1 ? setPokemonType2(res.data.types[0].type.name) : setPokemonType2(res.data.types[1].type.name)}
      setPokemonData(toArray);
      console.log(res);
    }catch(e){
      console.log(e);
    }
  }

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  }


  return (
    <div className="App">
    
    <form onSubmit={handleSubmit}>
      <label>
        <input 
        className="search"
        type="text"
        onChange={handleChange}
        placeholder="Search a Pokemon"      
        />
      </label>
    </form>
    {pokemonData.map((data) => {
      return(
      
        <div className="container">
        <div className ="sprites">
          <img className="sprite" src={data.sprites["front_default"]} />
          <img className="sprite" src={data.sprites["front_shiny"]} />
        </div>
        <div className="div-table">
          <div>
          <h1 className="pokemon-name">{data.name}</h1>
              <tr>
                <th className="table-cell">Type</th>
                {/* <td className="table-cell">{pokemonType} <br></br> {pokemonType2}</td> */}
                {/* <td className="table-cell">{pokemonType} <br></br> {pokemonType2 = (null) ? " " : pokemonType2 }</td> */}
                {/* {pokemonType2==null ? <td className="table-cell">{pokemonType}</td> : <td className="table-cell">{pokemonType} <br></br> {pokemonType2}</td>} */}
                {(data.types.length)==1 ? <td className="table-cell">{pokemonType}</td> : <td className="table-cell">{pokemonType} <br></br> {pokemonType2}</td>}
              
              </tr>
              <tr>
                <th className="table-cell">Height</th>
                <td className="table-cell">
                  {" "}
                  {Math.round(data.height * 3.9)}"
              </td>
              </tr>
              <tr>
                <th className="table-cell">Weight</th>
                <td className="table-cell">{" "} {Math.round(data.weight / 4.3)} lbs</td>
              </tr>
              <tr>
                <th className="table-cell">ID</th>
                <td className="table-cell">{data.id}</td>
              </tr>
            
         </div>
       </div>
       <Stats 
       pokemonData={pokemonData}/>
      </div>
        
      )  
    })}
    </div>
  );
}

export default App;
