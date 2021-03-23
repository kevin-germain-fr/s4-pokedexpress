const client = require('./database');


exports.getPokemons = (callback) => {
    client.query(`SELECT * FROM "pokemon" ORDER BY "numero";`, (error, result) => {
        callback(error, result.rows);
    })
}


exports.getPokemonStat = (idPokemon, callback) => {
    client.query(`SELECT * FROM "pokemon" WHERE "numero"=$1;`, [idPokemon], (error, result) => {
        callback(error, result.rows[0]);
    });
}


exports.getPokemonTypes = (idPokemon, callback) => {
    client.query(`SELECT * FROM "pokemon" p JOIN "pokemon_type" pt ON p.numero = pt.pokemon_numero  JOIN "type" t ON pt.type_id = t.id WHERE p.numero=$1;`, [idPokemon], (error, result) => {
        callback(error, result.rows);
    });
}


exports.getTypes = (callback) => {
    client.query(`SELECT * FROM "type" ORDER BY "name";`, (error, result) => {
        callback(error, result.rows);
    })
}


exports.getPokemonInType = (idType, callback) => {
    client.query(` SELECT * FROM "pokemon" p JOIN "pokemon_type" pt ON p.numero = pt.pokemon_numero WHERE pt.type_id=$1;`, [idType], (error, result) => {
        callback(error, result.rows);
    });
}