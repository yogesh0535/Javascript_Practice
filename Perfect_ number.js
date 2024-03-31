let n=prompt("Enter the number: ");
let sum=0;
for(let i=1;i<=Math.floor(n/2);i++){
    if(n%i==0){
        sum=sum+i;
    }
}
if(sum==n){
    console.log('Number is perfect number.');
}
else{
    console.log("Number is not perfect number.");
}
