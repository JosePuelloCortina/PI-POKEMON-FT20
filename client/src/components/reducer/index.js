import { GET_ALL_POKEMONS } from "../actions";

const initialState = {
    pokemons : []
}

export default function rootReduder(state = initialState, action){
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return{
                ...state,
                pokemons : action.payload
            }
        default : return state; 
    }
}