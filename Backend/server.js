const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const cors = require('cors')

const CONNECTION_URL = "mongodb+srv://Dmitry:slove251996034@cluster-vpk4o.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "hotDogs";

let database;
let collection;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(3500, () => {
    MongoClient.connect(CONNECTION_URL, {
        useNewUrlParser: true
    }, (error, client) => {
        if (error) {
            return console.log(error);
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("hotdogs");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});


app.get('/hotdog', (req, res) => {
    database.collection('hotDogs').find().toArray((err, docs) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
})

app.post('/hotdog', (req, res) => {
    let newHotDog = {
        name: req.body.name
    }

    database.collection('hotDogs').insertOne(newHotDog, (err, result) => {
        if (err) {
            console.log(err)
            return res.sendStatus(500);
        }
        res.send(result)
    })
})

app.put('/hotdog', (req, res) => {
    database.collection('hotDogs').update({
            _id: ObjectID(req.body.id)
        }, {
            name: req.body.name
        },
        (err, result) => {
            if (err) {
                console.log(err)
                return res.sendStatus(500);
            }
            res.sendStatus(200)
        }
    )
})

app.delete('/hotdog', (req, res) => {
    database.collection('hotDogs').deleteOne({
            _id: ObjectID(req.body.id)
        },
        (err, result) => {
            if (err) {
                console.log(err)
                return res.sendStatus(500);
            }
            res.sendStatus(200)
        })
})