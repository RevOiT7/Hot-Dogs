const db = require('../db');
const ObjectID = require('mongodb').ObjectID;

exports.all = (cb) => {
    db.get().collection('hotDogs').find().toArray((err, docs) => {
       cb(err, docs);
    })
}

exports.create = (newHotDog, cb) => {
    db.get().collection('hotDogs').insertOne(newHotDog, (err, result) => {
        cb(err, result);
    })
}

exports.update = (id, name, cb) => {
    db.get().collection('hotDogs').update(
        {_id: ObjectID(id)},
        name,
        (err, result) => {
            cb(err, result);
        }
    )
}

exports.delete = (id, cb) => {
    db.get().collection('hotDogs').deleteOne({
            _id: ObjectID(id)
        },
        (err, result) => {
            cb(err, result);
        })
}



