require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const config = require('./utils/config');
const app = express();

// todo: https://fullstackopen.com/en/part4/testing_the_backend
// https://fullstackopen.com/en/part4/testing_the_backend#test-environment
// https://www.theodinproject.com/courses/nodejs/lessons/testing-database-operations

mongoose.Promise = global.Promise;

// let uri = '';

// TODO: Ne prends pas en compte l'environnement de test et reste sur la database muber
// arranger le code pour voir un uri pâr défaut qui change si on est en mode test
mongoose.connect(config.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

// else if (process.env.NODE_ENV === 'test') {
// 	mongoose.connect('mongodb://localhost:27017/muberTest', {
// 		useNewUrlParser: true,
// 	});
// }

app.use(bodyParser.json());
routes(app);

// middleware pour la gestion de toutes les erreurs
app.use((err, req, res, next) => {
	res.status(422).send({ error: err.message });
});

module.exports = app;
