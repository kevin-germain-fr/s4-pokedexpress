exports.errorServer = (error, res) => {
    console.log(error);
    res.status(500).send('Erreur serveur !');
}