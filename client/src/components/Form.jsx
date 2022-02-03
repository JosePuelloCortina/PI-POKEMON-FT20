import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import {useHistory } from 'react-router-dom'
import { createPokemons } from './actions';
import Nav from './Nav';


export default function Form(){
    const types = useSelector(state => state.pokemons)
    const dispatch = useDispatch()
    // const history = useHistory()
    const [values, setValues] = useState({
        name: '',
        image: '',
        life: '',
        strong: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        types: []
    })

    function handleOnChange(e)  {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleOnChangeSelect = (e) => {
        if(values.types.includes(e.target.value)){
            setValues({
                ...values,
                types: values.types.filter(ty => ty !== e.target.value)
            })
        }else{
            setValues({
                ...values, 
                types: [...values.types, e.target.value]
            })
        }
    }

    const onSubmit = (e) =>{
        e.preventdefault()
        dispatch(createPokemons(values))
        setValues({
            name: '',
            image: '',
            life: '',
            strong: '',
            defense: '',
            speed: '',
            height: '',
            weight: '',
            types: []

        })
        // history.push("/main")
    }

    return(
        <div>
            <Nav/>
            <form onSubmit={onSubmit}> 
                <label htmlFor=""> Name: </label>
                <input name="name" value={values.name} onChange={handleOnChange}/>
                <label htmlFor="" >Image: </label>
                <input name="image" value={values.image} onChange={handleOnChange}/>
                <label htmlFor="">Life: </label>
                <input name="life" value={values.life} onChange={handleOnChange}/>
                <label htmlFor="">Strong: </label>
                <input name="strong" value={values.strong} onChange={handleOnChange}/>
                <label htmlFor="">Defense: </label>
                <input name="defense" value={values.defense} onChange={handleOnChange}/>
                <label htmlFor="">Speed: </label>
                <input name="speed" value={values.speed} onChange={handleOnChange}/>
                <label htmlFor="">Height: </label>
                <input name="height" value={values.height} onChange={handleOnChange}/>
                <label htmlFor="">Weight: </label>
                <input name="weight" value={values.weight} onChange={handleOnChange}/>
                <select onChange={handleOnChangeSelect} name='types' multiple>
                    {
                        types.length && types.map((t, i) => <option name={t.id} value={t.id}> {t.name} </option>)
                    }
                </select>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}