var myDog ={name: 'Milu', age: 1, dead: false};
var myDogString = JSON.stringify(myDog);

console.log(myDogString);

var myCatString ={"name":"Milu","age":1,"dead":false};
var myCat = JSON.parse(myCatString);
console.log(myCat);