// functions are objects

// create function
function Holiday(destination, days){
  this.destination = destination;
  this.days = days;
}

// add method 'info' to above function by using its prototype
Holiday.prototype.info = function(){
  console.log(this.destination + ' | ' + this.days + ' days');
}

// create instance
var firstDestination = new Holiday('pakistan', 30);
console.log(firstDestination.info());
// pakistan | 30 days


//////////////////////////// CLASS ///////////

// in class first letter is capital and we dont use prototype, we use constructor
/////////////////////////////////////////////////////////////////////////////////

class Holiday {}
console.log(Holiday.prototype);
// {constructor: ƒ}
// constructor: class Holiday
// __proto__: Object

class Holiday {
  constructor(destination, days){
    this.destination = destination,
    this.days = days
  }
}
console.log(Holiday.prototype);
// {constructor: ƒ}
// constructor: class Holiday
// __proto__: Object
/////////////////////////////////////////////////////////////////////////////////


// class

class Holiday {
  constructor(destination, days){
    // properties
    this.destination = destination,
    this.days = days
  }
  // methods
  info(){
    console.log(this.destination + ' | ' + this.days + ' days');
  }
}
const trip = new Holiday("Pakistan", 30);

console.log(trip);
// Holiday {destination: "Pakistan", days: 30}

console.log(trip.info());
// Pakistan | 30 days



