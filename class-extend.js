// super class

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

//const trip = new Holiday("Pakistan", 30);
//console.log(trip.info());



// sub class // extends super class

class Expedition extends Holiday {
  constructor(destination, days, gear){
    super(destination, days);
    this.gear = gear;
  }
  info(){
    super.info();
    // or
    // console.log(this.destination + ' | ' + this.days + ' days' + ' | ' + this.gear + ' is my gear');
    // console.log("Bring your " + this.gear);
    console.log("Bring your " + this.gear.join(' and your '));
  }
}

// const trip = new Expedition("Pakistan", 30, "full kit");
const trip = new Expedition("Pakistan", 30, ['sunglasses', 'camera', 'flags']);
console.log(trip.info());

// Pakistan | 30 days
// Bring your sunglasses and your camera and your flags