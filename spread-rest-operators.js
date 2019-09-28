// spread operator // with arrays

var fruits = ['apple','banana','grapes'];
var moreFruits = ['peach','melon','orange'];
var allFruits = [...fruits, ...moreFruits];

console.log(allFruits);

/// spread operator //// with objects

var day = {
  breakfast: 'toast',
  lunch: 'rice'
}

var night = {
  dinner: 'noodles'
}

var picnic = {...day, ...night}
console.log(picnic);

//////////////////////////////

// rest operator

var fruits = ['apple','banana','grapes'];
var [first, ...rest] = fruits;
console.log(first);
// apple
console.log(rest);
// banana, grapes