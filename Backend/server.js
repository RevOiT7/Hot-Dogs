const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const serveStatic = require('serve-static');
const db = require('./db');
const hotdogController = require('./controllers/hotdogs')

const CONNECTION_URL = "mongodb+srv://Dmitry:slove251996034@cluster-vpk4o.mongodb.net/test?retryWrites=true&w=majority";

const app = express();

app.use(serveStatic(__dirname + "/dist"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const port  = process.env.PORT || 3500;
app.listen(port)

db.connect(CONNECTION_URL, (err) => {
    if (err) {
            return console.log(err);
        }
    app.listen(port, () => {
        console.log('API app started')
    })
})

app.get('/hotdog', hotdogController.all);

app.post('/hotdog', hotdogController.create);

app.put('/hotdog', hotdogController.update);

app.delete('/hotdog', hotdogController.delete);
