// Refreshing Arrays
names = ['Monica', 'sheldon',12,12.5] //<---
// console.log(names[1]);

// for(var i=0;i<names.length;i++)
// {
//     console.log(names[i]);
// }

// for of

// for(var i of names)
// {
//     console.log("For of loop");
//     console.log(i);
// }

// array functions

// var l = names.length;
// console.log("Length: " + l);

// push
console.log("push");
names.push("Chandler");
console.log(names);

// pop
console.log("Pop");
names.pop()
console.log(names);

// #unshift
console.log("UnShift");
names.unshift(56);
console.log(names);

// shift
console.log("Shift");
names.shift();
console.log(names);


//indexOf

console.log("indexOf");
var i = names.indexOf(12.5);

console.log("Index of: " + i); 


//slice
        // [                ]
var arr = [1,2,3,4,5,6,7,8,9];
slicedArr = arr.slice(2,7);
console.log(arr);
console.log(slicedArr);

s = arr.slice(4);
console.log(s);

s2 = arr.slice(-1);
console.log(s2);

s3 = arr.slice(2,-2);
console.log(s3);

//Objects in JavaScript

var person = {
    height: 6,
    age:18,
    city:"mumbai";
}

console.log(person.height);