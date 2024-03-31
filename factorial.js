let n=prompt("Enter the number: ");
var fact=1;
if(n>=2){
    while(n>=2){
    fact= fact*n;
    n--;
    }
}
else{
    console.log(`factorial of ${n} is: ${fact}`)
}

console.log(`factorial of ${n} is: ${fact}`);
