function timer(secondes) {
    if (secondes>0) {
        console.log(secondes);
        timer(secondes-1);
    } else {
        console.log(0)
    
    }  
}
// timer(20);

function somme(num){
    
    if(num==1){
       
        return 1;
    }
    return num + somme(num-1)
}
console.log(somme(2));