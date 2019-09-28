var name = "Javed";
var age = 22;
var output = function(){
  console.log(`${name} is ${age} years old`);
}

var restructure = {name, age, output};
restructure.output();

///////////// OR ////////////////


var restructure = {
  name : "Javed",
  age : 22,
  output: function() {
    console.log(`${this.name} is ${this.age} years old`);
  }
}

restructure.output();

////// es6 /////////


var restructure = {
  name : "Javed",
  age : 22,
  output() {
    console.log(`${this.name} is ${this.age} years old`);
  }
}

restructure.output();
