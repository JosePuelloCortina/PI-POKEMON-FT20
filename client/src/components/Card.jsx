import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Card.css'
import Logo from "../image/logo.png"

export default function Card({id, name, image, types, life, defense}){
    return (
        <div className='card'> 
            <div className='card-body'>
                <div>
                    <img src={Logo} alt='imagen pokemon'  width='110px' />
                </div>
                <div className="card-body-img">
                    <Link to={`/home/${id}`}>
                        <img src={image} alt="" className="card-header"
                        width='110px' height='110px'/>
                    </Link>
                </div>
                <h1 className="card-body-name">
                    {name}                      
                </h1>
                    <div className='card-footer'>
                        <p className="card-footer-poke p">L: {life}</p>
                        <p className="card-footer-poke p">Type </p>                
                        <p className="card-footer-poke p">D: {defense}</p>

                    </div>
                    <div className='card-footer'>
                        {types.map((t) =>{
                            return (                                        
                                <p className="card-body-text">{t}</p>
                            )
                            })
                        }
                    </div>
                
            </div>
            
            
        </div>
    )
}