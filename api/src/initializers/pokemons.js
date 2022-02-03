const { Pokemon, Type } = require('../db'); 
const { v4: uuidv4 } = require('uuid'); 
const axios = require('axios'); 

const initializePokemons = async () => {
    try{
        let response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100'); 
        let pokemons = await axios.all(response.data.results.map((p) => axios.get(p.url)));

        pokemons = pokemons.forEach(async p => {            
            const result = {
                id: uuidv4(),
                name: p.data.name,
                life: p.data.stats[0].base_stat,
                image: p.data.sprites.other.dream_world.front_default,
                strong: p.data.stats[1].base_stat,
                defense: p.data.stats[2].base_stat,
                speed: p.data.stats[5].base_stat,
                height: p.data.height,
                weight: p.data.weight

            }

            let apiTypes = {
                type: p.data.types.map(e => e.type.name)
            };
                       
            let types = [];
            if(apiTypes.type){
                for( const ty of apiTypes.type){
                    const tipo = await Type.findOne({
                        where:{name: ty}
                    })
                    types.push(tipo);
                }
            }

            const createPokemon = await Pokemon.create(result) 
            await createPokemon.addTypes(types)
        });
    }catch(error){
        console.log(error) 
    } 
} 


module.exports = initializePokemons; 