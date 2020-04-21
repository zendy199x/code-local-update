var readlineSync = require('readline-sync');

var pet = {};

var name = readlineSync.question('Name Pet: ');
var gender = readlineSync.question('Gender (Male/Female):');
var weight = readlineSync.question('Weight:');

pet.name = name;
pet.gender = gender;
pet.weight = weight;

console.log(pet);

