var moment  = require('moment');

// var now = new Date();
// var myBirthday = new Date(1990, 4, 17); //17 - 05 - 1990
// console.log(now.getTime());
// console.log(myBirthday.getTime());

var now = moment('2018-04-18 07:00');
// console.log(now.fromNow());
console.log(now.format('YYYY/MM/DD'));