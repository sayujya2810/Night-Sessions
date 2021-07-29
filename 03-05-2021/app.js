//Intro to functions
// syntax: 


//Normal functions

var a=2;
var b=3;
function addNum()
{
  console.log(a+b);  
}

addNum(); //function execution

arguments/parameter behavior in functions

function Mul(x,y){
    console.log(x * y);
}

Mul(5,4);



//returning functions

function division(n1,n2)
{
    return "Division n1/n2 = " + n1/n2;
}

// console.log(division(1,2));

/* write a function which takes 2 numbers and 1 string as argument 
and that string should be = +,-,/,*
Based on that string you have to perform operations on passed numbers
*/

//Higher Order Functions

/*

Def:  Functions that operates on/with other functions.
they can:
    1) Accept functions as an argument
    2) return the functions
*/


// A) Accepting Func as arguments

function sayHello(){
    console.log("Hello");
}

function callTwice(f){
    f();
    f();
}

callTwice(sayHello);



// B) Function returning functions

function compare(a){
    return a>=50 && a<=100;
}

function makeBetween(min,max)//min = 10 and max = 100
{
    return function(n){ //n=20
        return n>=min && n<=max;
    }
}
compare10_to_100 = makeBetween(10,100);

compare20_5__to_30 = makeBetween(20.5,30);
console.log(compare10_to_100(0.5));
console.log(compare20_5__to_30(21));

//...
var a = [1,2,3,4];
try{
    console.log(c[2]);
}
catch(e){
    console.log(e);
}
console.log("we have reached end of code");