//Dog #1
var dog1a = new Dog('woof', "purple");

test( "dog1a bark test", function() {
  ok( dog1a.bark() == "woof i'm a purple dog", "Passed!" );
});

var dog1b = Object.create(Dog.prototype,{"sound" : {value: "woof"},
										 "color" : {value: "purple"}})
test( "dog1b bark test", function() {
  ok( dog1b.bark() == "woof i'm a purple dog", "Passed!" );
});

//Dog #2
var dog2a = new weinerDog('weeen', "yellow", 46);

test( "dog2a bark test", function() {
  ok( dog2a.bark() == "weeen i'm a 46 inch yellow dog", "Passed!" );
});

var dog2b = Object.create(weinerDog.prototype,{"sound" : {value: "weeen"},
										 "color" : {value: "yellow"},
										 "length" : {value: 46}})
test( "dog2b bark test", function() {
  ok( dog2b.bark() == "weeen i'm a 46 inch yellow dog", "Passed!" );
});

//Dog #3
var dog3a = new Dog("hoowoorf", "red");
test( "dog3a prototype test", function() {
  ok( typeof dog3a.prototype == "undefined", "Passed!" );
});

var dog3b = Object.create(Dog);
test( "dog3b prototype test", function() {
  ok( typeof dog3b.prototype == "object", "Passed!" );
});

//Dog #4
var dog4a = new weinerDog("woofskeee", "magenta");
test( "dog4a prototype test", function() {
  ok( typeof dog4a.prototype == "undefined", "Passed!" );
});

var dog4b = Object.create(weinerDog);
test( "dog4b prototype test", function() {
  ok( typeof dog4b.prototype == "object", "Passed!" );
});
