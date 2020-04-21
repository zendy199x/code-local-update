function Cat(){
	this.stomach =[];
};
Cat.prototype.eat = function(mouse){
	this.stomach.push(mouse);
	mouse.eat;
};

module.exports = Cat;