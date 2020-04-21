// console.log('hello word');

const rect =  require('./Shape/rectangle');
console.log(`The area of the reactangle(width = 10, height = 20) is ${rect.area(10, 20)}`);
console.log(`The circumference of the reactangle(width = 10, height = 20) is ${rect.circumference(10, 20)}`);
console.log(`Current time is: ${rect.currentDateTime}`);
console.log(`Current time is: ${rect.directoryName}`);
console.log(`Current time is: ${rect.fileName}`);

let aCircle =  require('./Shape/circle');
console.log(`aCircle's area: ${aCircle.area(5)}`);