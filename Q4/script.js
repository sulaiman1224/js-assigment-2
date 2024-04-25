
// A part------------------------------------------------------------------------

let fruits=["apple","banana","chery","date","fig"];
// B part-----------------------------------------------------------------------
fruits.push("grape");
//C part------------------------------------------------------------------------
fruits.pop("grape");

console.log(fruits);
//D part -----------------------------------------------------------------------

let EvanNumber = [1,2,3,4,5,6,7,8,9,10];

let filterarray=EvanNumber.filter((even)=>{

    return even%2===0;
});

console.log(filterarray);

//E part-------------------------------------------------------------------------

let SquardNumber=[1,2,3,4,5];

let arr=SquardNumber.map(f);

function f(x){
return x**2
}

document.write(arr)