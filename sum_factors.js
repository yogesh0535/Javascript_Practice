let n=prompt("Enter the number: );
let sum=0;
for(let i=1;i<=n/2;i++){
    if(n%i==0){
        sum=sum+i;
    }
}
console.log(`Sum is: ${sum}`);
