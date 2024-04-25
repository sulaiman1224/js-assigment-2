//Q1--------------------------------------------------------------------
//A part----------------------------------------------------------------

// declaring variable and assign value of your favourite crickter

var fvtCricketer= "amir"; //can be ressign and redeclare
let fvt_Cricketer = "afridi"; //can be ressign and cant redeclare because let is block scope variable
const Fvt_Cricketer = 345; //cant ressign and redeclare
       

//B part-----------------------------------------------------------------
// update the variable new crickter 
// using var

 fvtCricketer= "umerAkmal"; //update value successfully
 console.log(fvtCricketer);

// using let
fvt_Cricketer = "umerAkmal";  // update value successfully
console.log(fvt_Cricketer);

// using const
//Fvt_Cricketer = "umerAkmal";  // error we cant ressign const variable because const variable designed to 
//be immutable meaning their value cant be changed once they are set.
console.log(fvt_Cricketer);

   


//C--------------------------------------------------------- 
// inside a function
function usignVar (){

   var valueVar=34+32
   let valuelet=20+20
   const valueconst=10+20
    
}

//try to access outside the function
console.log(valueVar); //error  in consle value is undefind
console.log(valuelet);//error  in consle value is undefind
console.log(valueconst);//error  in consle value is undefind







