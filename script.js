var apple = "red"
apple =2
var apple = "green"
console.log(apple);
// 
let mango = "yello"
mango = 2
console.log(mango);
// 
const guava = "green"

// console.log(guava);
const target =document.getElementsByClassName("textdiv")[0]
target.innerHTML ="<h1>hello</h1>"
console.log(target);

function printHello (obj){
   const target =document.getElementsByClassName("textdiv")[0]
target.innerHTML ="<h1>"+obj+"</h1>"
}

printHello(guava);