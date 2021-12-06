let myCollection = [{
        name: "School of Code mug",
        count: 1,
        whatILike: "It has my cute pixel character on it!"
    },
    {
        name: "School of Code hat",
        count: 2,
        whatILike: "An often overlooked fashion accessory"
    },
    {
        name: "School of Code pillow",
        count: 1,
        whatILike: "Eat. Sleep. Code. Repeat :)"
    }
];

//console.log(myCollection);

//create a one element array to test if statement 
// let oneElement = [{
//     name: "School of Code pillow",
//     count: 1,
//     whatILike: "Eat. Sleep. Code. Repeat :)"
// }];

function describeItem(item) {
    //console.log(myCollection.length);
    if (item.length === 1) {
        console.log(`I have a ${item[0].name}. Here's what I like about it: ${item[0].whatILike}`);
    } else {
        console.log(`I have ${item.length} names. Here's what I like about them: ${item[0].whatILike}`)
    }
};

describeItem(myCollection);