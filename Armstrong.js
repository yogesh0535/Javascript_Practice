let n=prompt("Enter the number: ");
let l=n.toString().length;
let sum=0;
for(let i=0; i<=l;i++){
    r=n%10;
    sum=sum+Math.pow(r,l);
    n=Math.floor(n/10);1
}
if(sum==n){
  console.log(`Number ${n} is armstrong number.`);
}
else{
  console.log(`Number ${n} is not armstrong number.`);
}
