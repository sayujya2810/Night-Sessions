
// inbuilt functions

// console.log("Hello World")

// Alert function

// alert("Hey I am annoying you!!")

// prompt

// let x = prompt("Enter the value of X: ");
// console.log("Value of X : " , x);

// var y =20
// console.log(y);

// 

/*
if(condition)
{
    statements1
}

else{
    statements2
}

*/

// for(let i=0;i<10;i++)
// {
//     console.log(i);
// }

// var y=10

// while(y>0)
// {
//     console.log(y);
//     y -= 1; //y=y+1
// }

// var arr = [1,2,3.4, "chandler", "MrBeast", -10]
// console.log(arr);

var toDo = ["Attend lab","Water the plants"];
console.log(toDo);

// let newTask = prompt("Enter New Task: ");
// toDo.push(newTask);
// console.log(toDo)

// unshift

toDo.unshift("Do HTML practice");
console.log(toDo)

var alphabets = ["a","b","c","d","e","f","g"]
            //    0   1   2   3 

// console.log(alphabets.indexOf("c"));

let newArr = alphabets.slice(0,3);
console.log(newArr);

console.log("length",newArr.length);


var a= [1,2,3,4,5] 
for( let x = 0; x<alphabets.length;x++)
{
    a[x] = a[x] + 1;
}
console.log(a);

//  DOM

// querySelector()

let h1 = document.querySelector("h1");
h1.textContent = "The changed contents";



// getElementById

let h2 = document.getElementById("f1");
h2.style.color = "red";

// getElementByClassName()
// getElementByTagName()

let h2_2 = document.querySelector("#f1");
h2_2.textContent = "Something random";

let divs = document.querySelector(".c1");
divs.style.color = "white";

// document.querySelectorAll
// Somebu...Fix it
// let div2 = document.querySelectorAll("input");
// div2.style.backgroundColor = "red";

let a = document.querySelector("a");
a.setAttribute("href","https://www.github.com");


