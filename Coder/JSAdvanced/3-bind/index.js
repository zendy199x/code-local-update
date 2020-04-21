var mouse = {
	name: 'Mickey',
	sayHi: function() {
		console.log('Hi, my name is', this.name);
	}
};

var cat = {
	name: 'Tom'
}

// mouse.sayHi();
var say = mouse.sayHi.bind(cat);
say();