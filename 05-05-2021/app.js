//callback functions

const num = [1,2,3,4,5,6];

// num.forEach(function(e){ //e=1
//     console.log(e*2);
// })

//map



// const d = num.map(function(e){ //e=1
//     e = e-2; //e=-1
//     return 2*e; // e=-2
// })

// console.log(d);


//arrow functions

// const addition = (a,b) => {
//     console.log(a+b);
// }

// addition(9,4);

// var greet = () => {
//     //instruction
//     console.log("Hello there!!");
// }

// greet();

//Implicit Return functions

// const addition = (a,b) => ( //a=9, b=4
//     a+b
// )
// console.log(addition(9,4));


// setTimeout
// console.log("Hello");
// setTimeout(() => {
//     console.log("....Are you there?");
// },3000);
// console.log("Bye...");

// setInterval

// const id = setInterval(() => {
//     console.log(Math.random()) // 0 to 1
// },2000)

//Objects and classes

// const movies = 
// [
//     {
//         name:"Avengers",
//         rating: 9,
//         release: 2019
//     },
//     {
//         name:"End Game",
//         rating: 8.5,
//         release:2020
//     }
// ];

// console.log(movies[1]);

//filter
//[1,2,3,4,5,6]
// const oddNum = num.filter(n=>(n%2 !== 0)); //n=2  2%2
// console.log(oddNum);


// some and every

//[1,2,3,4,5,6]


const s = num.every((n) => ( //n=1 
    n > 1
));
console.log(s);

// values do AND operation in every()
// values do OR operation in some()