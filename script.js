// Arrays
let myArray = [1,2,3,4,true,"Eduardo"];

console.log(myArray[1]);

let myArray2 = ["fojfowejfojfow",42,true];

console.log(myArray2[0]);

// Array declaration
const numbers = [10,20,30,40,50];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

// Methods for arrays
numbers.push(60,70,80); //append an element to the end of the array
numbers.unshift(-30,-20,-10,0); //append an element at the beginning

months.pop(); //remove the element the last element the array

months.shift(); //remove the first element
months.splice(1,1);

//accessing to the elements in the array
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

//travel the array usisng a for loop
console.log(numbers.length);
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    
}


//display the array
console.table(numbers);
console.table(months);