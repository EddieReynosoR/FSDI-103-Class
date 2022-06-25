// //functions
let x=0;
// //create the function
// function greet(userName){
//     return `Hello ${userName} ID: ${x++}`;
// }



// let greet = function(userName){
//     x++;
//     return `Hello ${userName} ID: ${x}`;
// }

let greet = function(userName){
    x++;
    return `Hello ${userName} ID: ${x}`;
}

//call the function
document.write(`<p> ${greet("Eduardo")} </p>`);
document.write(`<p> ${greet("Gabo")} </p>`);
document.write(`<p> ${greet("Sebastian")} </p>`);

