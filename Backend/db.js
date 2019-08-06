const MongoClient = require('mongodb').MongoClient;



const DATABASE_NAME = "hotDogs";

let database;
let collection;

exports.connect = (url, done) => {
    if (database) {
        return done();
    }
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, (error, client) => {
        if (error) {
            return console.log(error);
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("hotdogs");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
}

exports.get = () => {
    return database;
}

