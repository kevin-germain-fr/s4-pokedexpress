const dataMapper = require('../dataMapper');
const { errorServer } = require('../utils');

exports.notFound = (req, res) => {
    res.status(404).send('Error 404');
}

exports.home = (req, res) => {
    dataMapper.getPokemons((error, pokemons) => {
        if(error) errorServer(error, res);
        else res.render('index', {pokemons});
    });
}


exports.pokemonDetail = (req, res) => {
    const idPokemon = Number(req.params.id);
    console.log(idPokemon)

    dataMapper.getPokemonStat(idPokemon, (error, pokemon) => {
        if(error) errorServer(error, res);
        else {
            dataMapper.getPokemonTypes(idPokemon, (error2, pokemonTypes) => {
                if(error2) errorServer(error2, res);
                else {
                    res.render('pokemon', {pokemon, pokemonTypes});
                }
            })
        }
    });
}


exports.showTypes = (req, res) => {
    dataMapper.getTypes((error, types) => {
        if(error) errorServer(error, res);
        else res.render('types', {types});
    });
}


exports.pokemonInType = (req, res) => {
    const idType = req.query.type;

    dataMapper.getPokemonInType(idType, (error, pokemons) => {
        if(error) errorServer(error, res);
        else {
            res.render('index', {pokemons});
        }
    });
}