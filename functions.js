/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(animals, stringArg){

    // starting at 0, loop over every index of the array animals and inspect the object key "name" to see if it matches stringArg
    for (let i = 0; i < animals.length; i++){

        if (animals[i]["name"] === stringArg){

            return animals[i];

        }
      
    }
  
    // return statement must be outside of For Loop or the code will not execute properly
    return null;

}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, stringArg, replacement){

    // same code logic from the search() function
    for (let i = 0; i < animals.length; i++){

        // checking if they key "name" of object at the index of i (in array of animals) is equal to stringArg
        if (animals[i]["name"] === stringArg){

            animals[i] = replacement; // attempted to use splice method but realized this was easier

        }
      
    }    

}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, stringArg){

    // same code logic from the search() function
    for (let i = 0; i < animals.length; i++){

        if (animals[i]["name"] === stringArg){

            // the splice() method is being use to delete the current index
            // the "delete" statement should not be used as the current index will remain with a value of undefined
            animals.splice(i, 1);

        }
      
    }  

}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal){

    // checks to see if the keys "name" and "species" are both greater than 0 in character length
    if (animal["name"].length > 0 && animal["species"].length > 0){

        // important that the object[key] is passed through here, and not the object
        if (search(animals, animal["name"]) === null) {

            //adds new animal object to the end of the animals array (argument)
            animals.push(animal);

        }

    }

}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}