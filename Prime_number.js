let n=prompt("Enter the number: ");
var prime=1;
if(n>2){
    for(let i=2;i<(n/2);i++){
        if(n%i==0){
            prime=2;
        }      
    }
}

if(prime==2){
    console.log("not prime");
}
else{
    console.log("prime");
}
