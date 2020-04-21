var readLineSync = require('readline-sync');

function rum(num) {
	for(let i = 0; i < 10; i++) {
		console.log(`${num} * ${i+1} = ${num*(i+1)}`);
	}
	console.log('\n\n');
}

while(1) {
	var numb =readLineSync.question('Bang cuu chuong: ');
	rum(numb);
}