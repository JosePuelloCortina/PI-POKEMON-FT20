import { GET_ALL_POKEMONS, GET_ALL_TYPES, GET_DETAIL, GET_SEARCH_POKEMONS, CLEAN_DETAILS, FILTER_BY_TYPES, SORT} from "../actions";
import { ASCENDENTES } from "../constantes/sort";

const initialState = {
    pokemons : [],
    types : [],
    detail : [],
    filterPokemons : []
}

function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return{
                ...state,
                pokemons : action.payload,
                filterPokemons: action.payload
            }
        case GET_ALL_TYPES:
            return{
                ...state,
                types : action.payload
            }
        case GET_DETAIL:
            return{
                ...state,
                detail: action.payload
            }
        // case CREATE_POKEMONS:
        //     return{
        //         ...state,
        //         pokemons: action.payload
        //     }
        case GET_SEARCH_POKEMONS:
            return{
                ...state,
                filterPokemons: action.payload,
            }
        case CLEAN_DETAILS:
            return{
                ...state,
                detail: action.payload
            }
        case FILTER_BY_TYPES:
            const filterPokemons = state.filterPokemons;
            const pokemonFiltered = action.payload === 'TYPES' ? filterPokemons : filterPokemons.filter(p => p.type === action.payload);
            return{
                ...state,
                filterPokemons: pokemonFiltered
            }
        case SORT:            
            let orderPokemons = [...state.pokemons];
            orderPokemons = orderPokemons.sort((a, b) =>{
                if(a.name < b.name){
                    return action.payload === ASCENDENTES ? -1 : 1;
                }
                if(a.name > b.name){
                    return action.payload === ASCENDENTES ? 1 : -1;
                }
                return 0;
            })
            return{
                ...state,
                filterPokemons: orderPokemons
            }

            
        default : return state; 
    }
}

export default rootReducer;