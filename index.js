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
    console.log(item.count);

    if (item.count === 1) {
        console.log(`I have a ${item.name}. Here's what I like about it: ${item.whatILike}`);
    } else {
        console.log(`I have ${item.count} ${item.name}. Here's what I like about them: ${item.whatILike}`);
    }
};

describeItem(myCollection[2]);

function describeCollection(arr) {

   arr.forEach(describeItem);

}

describeCollection(myCollection);


