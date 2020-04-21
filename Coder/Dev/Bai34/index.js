// function tossCoin() {
// 	var value  = Math.random();
// 	if(value < 0.5) {
// 		console.log('Mat sap');
// 	}
// 	else {
// 		console.log('Mat ngua');
// 	}
// }

// tossCoin();

function tossCoin() {
	var value = Math.random();
	var result = (value < 0.5) ? 'Mat sap' : 'Mat ngua';
	console.log(result);
}
tossCoin();