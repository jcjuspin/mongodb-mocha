require('dotenv').config();

let PORT = process.env.PORT;
let MONGODB_URI = process.env.MONGODB_URI;

// https://stackoverflow.com/questions/11104028/process-env-node-env-is-undefined
/**
tips

in package.json:

"scripts": {
  "start": "set NODE_ENV=dev && node app.js"
 }
in app.js:

console.log(process.env.NODE_ENV) // dev
console.log(process.env.NODE_ENV === 'dev') // false
console.log(process.env.NODE_ENV.length) // 4 (including a space at the end) 

so, this may better:

"start": "set NODE_ENV=dev&& node app.js"
or

console.log(process.env.NODE_ENV.trim() === 'dev') // true
 */

// création d'un environnement de test pour ne pas interférer avec l'environnement de developpement
if (process.env.NODE_ENV.trim() === 'test') {
	MONGODB_URI = process.env.TEST_MONGODB_URI;
}

module.exports = {
	MONGODB_URI,
};
