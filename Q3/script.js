//A part----------------------------------------------------------------

//using arrow function calculateArea 
calculateArea=(length,widht)=>length*widht;
console.log(calculateArea(6,4))

//B part----------------------------------------------------------------

function findMax(array){
    
    return Math.max(...array);
    
    
}
console.log(findMax([1,4,7,8,9,2,4,12,43,12]))

//C part----------------------------------------------------------------

 sayhello=(name)=>{
    return `hello ${name}!`

 }
let fn=sayhello("sulaiman");
console.log(fn)