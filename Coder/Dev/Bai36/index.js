// function getTotal(price, card) {
// 	var discountRate;

// switch (card.tier) {
// 	case 'bonze':
// 		discountRate = 0.02;
// 		break;
// 	case 'silver':
// 		discountRate = 0.05;
// 		break;
// 	case 'gold':
// 		discountRate = 0.08;
// 	default:
// 		discountRate = 0.1;
// 		break;
// }
// 	// if (card.tier === 'bronze') {
// 	// 	discountRate = 0.02;
// 	// }
// 	// else if (card.tier === 'silver') {
// 	// 	discountRate = 0.05;
// 	// }
// 	// else if (card.tier === 'gold') {
// 	// 	discountRate = 0.08;
// 	// }
// 	// else
// 	// {
// 	// 	discountRate = 0.1;
// 	// }
// 	return price * (1 -  discountRate);
// }

// var memberCard = {
// 	tier: 'gold'
// };

// var total = getTotal(500000, memberCard);
// console.log(total);

var trafficLight = 'green';

function goOrNot(lightValue) {
	switch (lightValue) {
		case 'green':
		case 'orange':
			console.log('go');
			break;
		default:
			console.log('stop');
			break;		
	}
};

goOrNot(trafficLight);