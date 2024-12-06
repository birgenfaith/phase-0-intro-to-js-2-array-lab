const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name){
    cats.push(name);
}
destructivelyAppendCat("Ralph");


function destructivelyPrependCat(name){
    cats.unshift(name);
}
destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat(){
    cats.pop();
}
destructivelyRemoveLastCat();

// REMOVE FIRST ELEMENT 
function destructivelyRemoveFirstCat(){
   cats.shift();
}
destructivelyRemoveFirstCat();

// SPREAD OPERATOR 
function appendCat(name){
    return [...cats, name];  
}
appendCat("Broom");

// PREPEND 
function prependCat(name) {
    return [name, ...cats]; 
}
prependCat("Arnold");

// .SLICE() 
function removeLastCat(){
    return [...cats.slice(0, cats.length - 1)];  
}
console.log(removeLastCat());  

function removeFirstCat(){
    return [...cats.slice(1)];  
}
console.log(removeFirstCat()); 

console.log(cats);  

