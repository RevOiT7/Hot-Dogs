const hotDogs = require('../models/hotdogs');

exports.all = (req, res) => {
    hotDogs.all((err, docs) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
}

exports.create = (req, res) => {
    let newHotDog = {
        name: req.body.name
    }
    hotDogs.create(newHotDog, (err, result) => {
        if (err) {
            console.log(err)
            return res.sendStatus(500);
        }
        res.send(result)
    })
}

exports.update = (req, res) => {
    hotDogs.update(req.body.id, {name: req.body.name}, (err) => {
        if (err) {
            console.log(err)
            return res.sendStatus(500);
        }
        res.sendStatus(200)
    })
}

exports.delete = (req, res) => {
    hotDogs.delete(req.body.id, (err) => {
        if (err) {
            console.log(err)
            return res.sendStatus(500);
        }
        res.sendStatus(200)
    })
}