/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
animal.species = "felis catus";
animal["name"] = "Burger";
animal["noises"] = [];

console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = []; // initialization of an empty array
noises[0] = "meow"; // hard-coded "meow" at index 0 
noises.push("brrrrt"); // soft-coded "brrrrt" to the end of the array using push()
noises.unshift("hiss"); // soft-coded "hiss" to the front of the array using unshift()
noises.push("muwao"); // soft-coded "muwao" to the end of the array using push()

console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal["noises"] = noises;
animal["noises"].push("bleh");
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

console.log(animal["name"]);
console.log(animal["species"]);
console.log(animal["noises"][1]);

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = []; // attention: this var is animals, and is not the same as the object variable animal

animals.push(animal);

console.log(animals);

var duck = { 
  species: 'duck', 
  name: 'Jerome', 
  noises: [
    'quack', 
    'honk', 
    'sneeze', 
    'woosh'
  ] 
}

animals.push(duck);

console.log(animals); 

var dog = {
  species: 'dog',
  name: 'Julia',
  noises: [
    'bark', 
    'woof',
    'whine'
  ]
}

var alligator = {
  species: 'alligator',
  name: 'Crocubot',
  noises: [
    'hiss',
    'grumble'
  ]
}

animals.push(dog);
animals.push(alligator);

console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
*
* An array was chosen for the friends collection, because this will make it easier to order friends
* by how compatibility. This will also make it easier to remove "friends" from the list if it is
* necessary in the future. If we had chosen an object list, containing objects, it would be difficult
* for us to easily modify the data contained.
*
*/

var friends = [];

function getRandom(animals){

  return animals[Math.floor(Math.random() * (animals.length - 1))];

}

friends.push(getRandom(animals)["name"]);

console.log(friends); 

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}