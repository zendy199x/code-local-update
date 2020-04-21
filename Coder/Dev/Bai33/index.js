// function tossCoin() {
// 	var value = Math.random();
// 	if (value < 0.5) {
// 		console.log('mat sap');
// 	} else {
// 		console.log('mat ngua');
// 	}
// };
// tossCoin();

function countBills(bills) {
	var total = 0;
	for(var bill of bills){
		if(!bill.fake){
		total += bill.value;
		} else {
			console.log('fake bill', bill);
			break;
		}
	}
	return total;
}

var bills = [
	{value: 10000},
	{value: 20000},
	{value: 300000, fake: true},
	{value: 50000},
	{value: 100000}
];

var total = countBills(bills);
console.log(total);