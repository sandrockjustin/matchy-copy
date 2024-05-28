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

    for (let i = 0; i < animals.length; i++){

        if (animals[i]["name"] === stringArg){

            return animals[i];

        }
      
    }
  
  return null;

}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, stringArg, replacement){

    for (let i = 0; i < animals.length; i++){

        if (animals[i]["name"] === stringArg){

            animals[i] = replacement;

        }
      
    }    

}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, stringArg){

    for (let i = 0; i < animals.length; i++){

        if (animals[i]["name"] === stringArg){

            animals.splice(i, 1);

        }
      
    }  

}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal){

    if (animal["name"].length > 0 && animal["species"].length > 0){

        if (search(animals, animal) === null) {

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