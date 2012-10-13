var Dog = function(sound, color){
	this.sound = sound;
	this.color = typeof color !== 'undefined' ? color : "black";
}

Dog.prototype.bark = function(){
	return this.sound + " " + "i'm a " + this.color + " dog";	
}

var weinerDog = function(sound, color, length){
	this.sound = sound;
	this.color = typeof color !== 'undefined' ? color : "black";
	this.length = length;		
}

weinerDog.prototype = Object.create(Dog.prototype);

weinerDog.prototype.bark = function(){
	return this.sound + " " + "i'm a " + this.length + " inch " + this.color + " dog";	
}