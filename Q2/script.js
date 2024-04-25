
function sumevennumber(){
    let sum=0;
    let array=[1,2,3,4,5,3,4,6,8,9,2,34,2,1,3];
    for(let i=0; i<array.length; i++){ 
       if(array[i]%2==0){
        sum+=array[i]
       }   
    }
    document.write(sum)
    
}
sumevennumber()


