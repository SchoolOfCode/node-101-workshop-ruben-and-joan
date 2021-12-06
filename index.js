
import collection from "./collection.js";                      // Import myCollection array from collection.js 
import chalk from 'chalk';                                     // Import chalk for usinf in this file.

console.log(collection);                                       // Checking if myCollection array is imported.


function describeItem(item) {                                  // Function for checking the count items and 
    console.log(item.count);                                   // printing some properties from the item given.

    if (item.count === 1) {
        console.log(`I have a ${chalk.cyan(item.name)}. Here's what I like about it: ${chalk.bgWhite.green.bold(item.whatILike)}`);
    } else {
        console.log(`I have ${item.count} ${chalk.cyan(item.name)}. Here's what I like about them: ${chalk.bgWhite.green.bold(item.whatILike)}`);
    }
};

// describeItem(myCollection[2]);

function describeCollection(arr) {                             // Function for going trough the array and 
                                                               // run describeItem function for each element of the array.
   arr.forEach(describeItem);

}

describeCollection(collection);                                // Check describeCollection function with myCollection array imported.


