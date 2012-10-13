//Bark Testing
var dog1 = new Dog('woof', "purple");
test( "dog1 bark test", function() {
  ok( dog1.bark() == "woof i'm a purple dog", "Passed!" );
});

var dog2 = new Dog('weef', 'green');
test( "dog2 bark test", function() {
  ok( dog2.bark() == "weef i'm a green dog", "Passed!" );
});

var dog3 = new Dog('wurphumph', "orange");
test( "dog3 bark test", function() {
  ok( dog3.bark() == "wurphumph i'm a orange dog", "Passed!" );
});

var dog4 = new weinerDog('weeen', "yellow", 46);
test( "dog4 bark test", function() {
  ok( dog4.bark() == "weeen i'm a 46 inch yellow dog", "Passed!" );
});

//NEW vs Object.create
var dog5 = new Dog("hoowoorf", "red");
test( "dog5 prototype test", function() {
  ok( typeof dog5.prototype == "undefined", "Passed!" );
});

var dog6 = Object.create(Dog);
test( "dog6 prototype test", function() {
  ok( typeof dog6.prototype == "object", "Passed!" );
});

var dog7 = new weinerDog("woofskeee", "magenta");
test( "dog7 prototype test", function() {
  ok( typeof dog7.prototype == "undefined", "Passed!" );
});

var dog8 = Object.create(weinerDog);
test( "dog8 prototype test", function() {
  ok( typeof dog8.prototype == "object", "Passed!" );
});