//part A ---------------------------------------------------------
//create an array

let numbers=[1,2,3,4,5];

//part B ---------------------------------------------------------
// use the foreach method to ittrate
numbers.forEach(value => {
    console.log(value);
});

//part C ---------------------------------------------------------
// use map method 
let SquaredNumber=numbers.map((value)=>{
    return value**2 
})
console.log(SquaredNumber);
// part D-------------------------------------------------------------
//use the filter method 
let EvenNumbers=numbers.filter((value)=>{
    return value%2===0;
})
console.log(EvenNumbers);

// part E-------------------------------------------------------------
//use reduce method
let calculate=numbers.reduce((value1,value2)=>{
    return value1+value2;
});

console.log(calculate);

// part F-------------------------------------------------------------
// difference between map and foreach method

//the foreach loop does not return value only excetes the loop ;

let arr1=numbers.forEach(value => {
    // return value;  // cant return the value
    console.log(value) 
});

//the map method works like a foreach loop but difference only map method return the value; example


let arr2=numbers.map((value)=>{
    return value  // return the value
});
console.log(arr2)
