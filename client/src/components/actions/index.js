import axios from 'axios';

export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const GET_ALL_TYPES = 'GET_ALL_TYPES';
export const GET_SEARCH_POKEMONS = 'GET_SEARCH_POKEMONS';
export const GET_DETAIL = 'GET_DETAIL';
export const CREATE_POKEMONS = 'CREATE_POKEMONS';
export const ORDER_BY_NAME_POKEMON = 'ORDER_BY_NAME_POKEMON';
export const CLEAN_DETAILS = 'CLEAN_DETAILS';
export const FILTER_BY_TYPES = 'FILTER_BY_TYPES';
export const SORT = 'SORT';

const BASE_URL = 'http://localhost:3001';

export function getAllPokemons(){
    return async function(dispatch){
        try {
            const { data } = await axios.get(`${BASE_URL}/pokemons`)
            dispatch({
                type: 'GET_ALL_POKEMONS', payload: data
            });            
        } catch (error) {
            console.log(error)
            
        }
    }
}

export function getAllTypes(){
    return async function(dispatch){
        try{
            const {data } = await axios.get(`${BASE_URL}/types`);
            dispatch({
                type: 'GET_ALL_TYPES', payload: data
            })

        }catch(error){
            console.log(error);
        }
    }
}

export function createPokemons(values){
    return async function(dispatch){
        const data =  await axios.post('http://localhost:3001/pokemons/add',values);        
        return data;
    }
}

export function getSearchPokemons(name){
    return async function(dispatch){
        try {
            var res = await axios.get(`${BASE_URL}/pokemons/searchPokemon?name=`+ name)
            dispatch({
                type: GET_SEARCH_POKEMONS, payload: res.data
            })
            
        } catch (error) {
            console.log(error)            
        }
    }
}



export function getDetail (id){
    return async function(dispatch){
        try {
            const res  = await axios.get('http://localhost:3001/pokemons/id/' + id );
            dispatch({
                type: 'GET_DETAIL', payload: res.data
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}



export function filterByTypes(payload){
    return{
        type: 'FILTER_BY_TYPES', payload
    }
}

export function sort(order){
    return {
        type: 'SORT',
        payload: order
    }
}

export function cleanDetails(){
    return async function(dispatch){
        let objEmpty = {};
        dispatch({
            type: CLEAN_DETAILS, payload: objEmpty
        })
    }
}