/*var vs let vs const */

/*
var => function scope
let => block scope
const => constant
*/

function funcaoQualquer(){
    if(true){
    let a = 123;
}  
    console.log(a);
}

funcaoQualquer();