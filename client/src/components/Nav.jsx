import React, { useState} from 'react'; 
import { useDispatch } from 'react-redux';
import { getSearchPokemons } from './actions';
import { NavLink } from 'react-router-dom';

import './styles/Nav.css';

export default function Nav({id}){

    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    function onSubmit(e){
        e.preventDefault();
        dispatch(getSearchPokemons(input))
    }


    function onInputChange(e){
        e.preventDefault()
        setInput(e.target.value)
    }

    // function handleSubmit(e){
    //      e.preventDefault()
    //      dispatch(getSearchPokemons(input))
    // }

    // const search = (e)=>{
    //     e.preventDefault();
    //     dispatch(getSearchPokemons(input));

    // }

    return(

        <div className="nav">
            <NavLink exact to='/home' className="enlace" >
                <h3>Home</h3>
            </NavLink>
            <NavLink exact to='/create' className="enlace" >
                <h3>Crear Pokemon</h3>
            </NavLink>
            <div className="box">
                <input type="text" placeholder="Buscar Pokemons" onChange={onInputChange} value={input} />
                <NavLink to={`/home/${id}`}>
                    <button onClick={onSubmit} >Search</button>
                </NavLink>
            </div>
            {/* <div>
                <input id="name" type="text" placeholder='Search' onChange={(e) => handleInputPokemons(e)} />
                <button type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
            </div> */}
        </div>
    )
    
}




