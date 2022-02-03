import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { useEffect } from 'react';

import { getDetail } from './actions/index';

import Nav from './Nav';
import Logo from "../image/logo.png"
import './styles/Card.css';

export default function Detail(){
    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getDetail(id));
    }, [dispatch])

    const pokeDetail = useSelector((state) => state.detail)

    

    return(
        <div >
            <Nav/>

            <div className='App-header' >
            {
                pokeDetail != '' ?
                <div  className='card'> 
                    
                    <div>
                        <img src={Logo} alt='imagen pokemon'  width='110px' />
                    </div>
                    <img src={pokeDetail.image} alt="img not found" width="200px" height="160px" className='card-body-img'/>
                    <h1 className="card-body-name">{pokeDetail.name}</h1>
                    <div className='card-footer'>
                        <p className="card-footer-poke p">Life: {pokeDetail.life}</p>
                        <p className="card-footer-poke p">Strong: {pokeDetail.strong}</p>
                        <p className="card-footer-poke p">defense: {pokeDetail.defense}</p>
                    </div>
                    <div className='card-footer'>
                        <p className="card-footer-poke p">speed: {pokeDetail.speed}</p>
                        <p className="card-footer-poke p">height: {pokeDetail.height}</p>
                        <p className="card-footer-poke p">weight: {pokeDetail.weight}</p>
                    </div>
                    <div className='card-footer'>
                        <p className="card-footer-poke p">Types:</p>
                    </div>

                    <div className='card-footer'>
                        {
                            pokeDetail.types.map((t) => {
                                return (
                                <p className="card-body-text">{t.name}</p>
                                )
                            })
                        }
                    </div>

                </div>
                : 
                <div>No trajo al pokemon</div>
            }
            <button><Link to='/home'>Volver</Link></button>
            <br/>
            </div>
            
        </div>  
    )
}