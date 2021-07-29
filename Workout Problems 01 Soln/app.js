//Q1
console.log("-----Q1-----");
var v1 = 123;
console.log(v1);
var v2 = "Hello";
console.log(v2);
var v3 = 145.76;
console.log(v3);
var v4 = 'a';
console.log(v4);

//Q2
//a
for(let i=0;i<5;i++)
{
    for( let j=0; j<=i; j++)
    {
        console.log("*");
    }
}
//b
for(var i=0;i<5;i++)
{
    for( var j=5; j>=i; j--)
    {
        console.log(j);
    }
}
//c
for(let i=1;i<5;i++)
{
    for( let j=1; j<=i; j++)
    {
        let ctr = 1
        console.log(ctr);
        ctr++;
    }
}

//Q3
pastaRecipe = ["pata", "water", "slat", "timato", "cheese", "oregano", "pepper"];
pastaRecipe[0] = "pasta";
pastaRecipe[2] = "salt";
pastaRecipe[3] = "tomatos";
console.log(pastaRecipe)

//Q4
var students = [["Leonard",70,80,34],["Raj",90,100,80],["Eren",50,70,45]];
var failed = [];
var topper = [];
var average = [];

for(var i=0 ; i < 3 ; i++)
{
    for(var j = 1 ; j < 4 ; j++)
    {
        //a
        if(students[i][j] < 40)
        {
            failed.push(students[i][0] + ":" + students[i][j]);
        }

        //b
        if(students[i][j] >= 90)
        {
            topper.push(students[i][0] + ":" +students[i][j]);
        }

    }

}

//c 

for(var x = 1 ; x < 4; x++)
{
    let avg = 0;
    for(var y = 0; y < 3 ; y++)
    {
        avg = avg + students[y][x];
    }
    avg = avg/3;
    average.push(avg);
}
console.log("Failed Name-marks: ");
console.log(failed);
console.log("Topper name-marks: ");
console.log(topper);
console.log("Average subject wise: ");
console.log(average);

function makeBwNum(min,max){
    return function(num){
        return num >= min && num <=max;
    }
}
  
const oneToTen = makeBwNum(1,10);

console.log(oneToTen(5));
console.log(oneToTen(15));

Try Catch

var a = [1,2,4,5];
try{
    console.log(b[7]);
}
catch(e){
    console.log(e);
}

var person = {
    fname:"Gunjan",
    lname:"Saxena",
    age:30,
    position:"Lead Commander",
    printPerson: function(){
        return this.fname + " " + this.lname;
    }
}