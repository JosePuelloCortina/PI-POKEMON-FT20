import React from 'react';
import './styles/Paginado.css';

export default function Paginado({pokemonPaginado, allPokemons, showPaginas}){
    const nPaginado = [];

    for ( let i = 1; i <= Math.ceil(allPokemons/pokemonPaginado); i++){
        nPaginado.push(i);
    }

    return(
        <nav >
          <ul className= "pagination">
            { nPaginado &&
              nPaginado.map(number =>{
                  return (
                    <li className="numero" key={number} >
                      <a onClick={()=> showPaginas(number)}>{number}</a>
                    </li>
                  );
              })
            }
          </ul>
        </nav>
      )
}