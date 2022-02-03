import React from "react";
import { Link } from "react-router-dom";
import './styles/LandingPage.css'



function LandingPage(){
    return(
        <div className="div">
            <h1 className="h1">PI - Pokemons</h1>
            <Link to='/home' className='Link'>
                <button>Ingresar</button>
            </Link>
        </div>
    )
}

export default LandingPage;