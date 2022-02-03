import React from "react";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector  } from "react-redux";
import Card from './Card';
import './styles/Cards.css';


import { getAllTypes, getAllPokemons, filterByTypes} from "./actions";



import Nav from "./Nav";
import Order from "./Order";
import Paginado from "./Paginado";

export default function Home(props){

    const [state, setState] = useState("");
    // const[search, setSearch] = useState("")

    const dispatch = useDispatch();

    const allPokemons = useSelector((state) => state.filterPokemons);
    const allTypes = useSelector((state) => state.types);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPaginado, setPokemonPaginado] = useState(10);

    const indexOfLastPokemon = currentPage * pokemonPaginado;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonPaginado;
    const currentPokemon = allPokemons.slice(indexOfFirstPokemon,indexOfLastPokemon);

    const showPaginas = (nPokemon)=> {
        setCurrentPage(nPokemon);
      }

    useEffect(()=>{
        dispatch(getAllPokemons());
        dispatch(getAllTypes());
    }, [dispatch])

    function handleFilterType(e){
        e.preventDefault();
        dispatch(filterByTypes(e.target.value));
    }

    // function handleSubmit(event){
    //     event.preventDefault();
    //     setState( state.filter(elem => elem.name.includes(search)))
    // }

    function viewAll(){
        setState(allPokemons);
    }

    return (
        <div>
            <Nav/>

            <div>
                <br/>
                <button className="btn2" onClick={() => viewAll()}>POKEMONS </button>
                <Order/>
                <select onChange={ e => handleFilterType(e)}>
                    <option value="normal">normal</option>
                    <option value="fighting">fighting</option>
                    <option value="flying">flying</option>
                    <option value="poison">poison</option>
                    <option value="ground">ground</option>
                    <option value="rock">rock</option>
                    <option value="bug">bug</option>
                    <option value="ghost">ghost</option>
                    <option value="steel">steel</option>
                    <option value="fire">fire</option>
                    <option value="water">water</option>
                    <option value="grass">grass</option>
                    <option value="electric">electric</option>
                    <option value="psychic">psychic</option>
                    <option value="ice">ice</option>
                    <option value="dragon">dragon</option>
                    <option value="dark">dark</option>
                    <option value="fairy">fairy</option>
                    <option value="unknown">unknown</option>
                    <option value="shadow">shadow</option>
                </select>

            </div>
            {/* <h2>Pokemons</h2> */}
            <div className="cards row">
                
                {currentPokemon?.map(p => {
                    return(
                        <Card 
                        key = {p.id}
                        life = {p.life}
                        defense= {p.defense}
                        id = {p.id}
                        name = {p.name}
                        image = {p.image}
                        types = {p.types.map(t => t.name)}                       
                        />
                    )
                })
                
                }
               
            </div>

            <Paginado
                pokemonPaginado={pokemonPaginado}
                allPokemons={allPokemons.length}
                showPaginas={showPaginas}

            />

        </div>
    )
}

 