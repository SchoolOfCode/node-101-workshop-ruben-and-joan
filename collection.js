
import chalk from 'chalk';                                  // Import chalk for using it in the array data.

let myCollection = [{                                      // myCollection array.
  name: "School of Code mug",
  count: chalk.bgRed.yellow(1),                                  // Using Chalk in the array instead of the function.
  whatILike: "It has my cute pixel character on it!"
},
{
  name: "School of Code hat",
  count: chalk.bgRed.yellow(2),                                  // Using Chalk in the array instead of the function.
  whatILike: "An often overlooked fashion accessory"
},
{
  name: "School of Code pillow",
  count: chalk.bgRed.yellow(1),                                  // Using Chalk in the array instead of the function.
  whatILike: "Eat. Sleep. Code. Repeat :)" 
}
];

export default myCollection;                               // Using export default for importing myCollection array.