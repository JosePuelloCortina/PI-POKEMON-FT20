const server = require('express').Router();
const { Pokemon, Type, Op } = require('../db'); 

server.get("/", async function(req, res, next){
    try {
        let { page } = req.query; 
        if(!page) page = 1;
        const paginado = 10;
        const dbPokemons = await Pokemon.findAll({include: {model: Type}})
        res.status(200).json(dbPokemons.slice(paginado * (page -1), (paginado *(page - 1)) + paginado))
        
    } catch (error) {
        next(error)        
    }
}); 

server.get("/id/:id", async function(req, res, next){
    try {
        const { id } = req.params;
        let pokemon;
        if(isNaN(id)){
            pokemon = await Pokemon.findOne({
                where:{
                    id: id
                }, include: {
                    model: Type
                }
            });
        }
        res.send(pokemon ? pokemon : "No hay pokemon!!")
    } catch (error) {
        next(error)        
    }
});

server.get("/searchPokemon", async function(req, res, next){
    try {
        const { name } = req.query;
        let result = [];
        let dbPoke = await Pokemon.findAll({
            where:{
                name:{
                    [Op.iLike]: `%${name}%`
                }
            },
            include: {model: Type}
        });
        if(dbPoke && dbPoke.length) result = result.concat(dbPoke)
        return res.json(result)
    } catch (error) {
        next(error)        
    }
}); 

server.post("/add", function(req, res, next){
    const { name, life, image, strong, defense, speed, height, weight, type} = req.body;
    if(!name || !life || !image || !strong || !defense || !speed || !height || !weight ){
        return res.status(422).json({error: "No se enviaron todos los datos"})
    }
    Pokemon.create({
        name: name,
        life: life,
        image: image,
        strong: strong,
        defense: defense,
        speed: speed,
        height: height,
        weight: weight,
    })
    .then(pokemon => {
        pokemon.addTypes(type)
        .then(async ()=>{
            pokemon.type = await pokemon.getTypes()
            console.log(pokemon.type)
            res.json({
                name: pokemon.name,
                life: pokemon.life,
                image: pokemon.image,
                strong: pokemon.trong,
                defense: pokemon.defense,
                speed: pokemon.speed,
                height: pokemon.height,
                weight: pokemon.weight,
            })
        })
    }).catch(next)
})

module.exports = server; 