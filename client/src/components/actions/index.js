import axios from 'axios';

export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';

const BASE_URL = 'http://localhost:3001';

export function getAllPokemons(){
    return async function(dispatch){
        try {
            const { data } = await axios.get(`${BASE_URL}/pokemons`)
            dispatch({
                type: GET_ALL_POKEMONS, payload: data
            });            
        } catch (error) {
            console.log(error)
            
        }
    }
}