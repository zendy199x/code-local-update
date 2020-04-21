// var done = function() {
// 	console.log('Finish');
// }
// console.log('Start');
// var timeoutId = setTimeout(done, 1000);
// console.log('Done');
// clearTimeout(timeoutId);
// var i = 0;
// var intervalId = setInterval(function() {
// 	++i;
// 	console.log(i);
// 	if(i === 5) {
// 		clearInterval(intervalId);
// 	}
// }, 1000);

function countFrom(a, b) {
    var promise = new Promise((resolve,reject)=>{
        setInterval(() => { a ++;
            a();
        resolve(data);
        if (a === b) {clearInterval()}
        }, 1000);
    return promise;
    })
};

countFrom(1, 10).then(function() {
    console.log('Done');
})