//object literal

var person = {
	firstName = 'Duc',
	lastName = 'Nguyen',
	showName = function() {
		console.log(this.firstName + ' ' + this.lastName)
	}
};

//object contruction
var psn = new Object();
psn.firstName = 'Duc';
psn.lastName = 'Nguyen';
pns.showName = function() {
	console.log(this.firstName + ' ' + this.lastName)
};

//object contruction pattern

function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.showName = function() {
		console.log(this.firstName + ' ' + this.lastName)
	};
}

var psn1 = new Person('Duc', 'Nguyen');
var psn2 = new Person('Hoang', 'Pham');

//prototype

Person.prototype.firstName = 'Duc';
Person.prototype.lastName = 'Nguyen';
Person.prototype.showName = function() {
	console.log(this.firstName + ' ' + this.lastName);
};

var psn1 = new Person();
console.log(pns1.firstName);
psn1.showName;