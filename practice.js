/*

// prime numbers
let n=8;
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

*/
/*
// factorial
let n=6;
var fact=1;
if(n>=2){
    while(n>=2){
    fact= fact*n;
    n--;
    }
}
else{
    console.log(`factorial is: ${fact}`)
}

console.log(`factorial is: ${fact}`);
*/


/*
// palindrom number
let temp=1234321;
let num;
let rev=0;
let n=temp;
while(n!=0){
    num=n%10;
    rev=rev*10+num;
    n=Math.floor(n/10); 
}
if(rev==temp){
    console.log("Number is palindrom");
}
else{
    console.log("Number is not palindrom");
}
*/

/*
// Perfect number
let n=28;
let sum=0;
for(let i=1;i<=Math.floor(n/2);i++){
    if(n%i==0){
        sum=sum+i;
    }
}
if(sum==n){
    console.log('Number is perfect number');
}
else{
    console.log("Number is ");
}
*/


/*
// Sum of natural numbers
let s=1;
let sum=0;
for(let i=0;i<101;i++){
    s=i*i;
    sum=sum+s;
}
console.log(sum);
*/

/*
// reverse the digit
let n=234512345678;
let l=n.toString().length;
let r=0;
let rev=0
for(let i=1;i<=l;i++){
    r = n%10;
    rev = rev*10+r;
    n = Math.floor(n/10);
}
console.log(rev);
*/


/*
let n=28;
let sum=0;
for(let i=1;i<=n/2;i++){
    if(n%i==0){
        sum=sum+i;
    }
}
console.log(`Sum is: ${sum}`);
*/

/*
// armsrong number
let n=153;
let l=n.toString().length;
let sum=0;
for(let i=0; i<=l;i++){
    r=n%10;
    sum=sum+Math.pow(r,l);
    n=Math.floor(n/10);1
}
console.log(sum);
*/

// strong number

// prime number between 1 and 100
// let i,n;
// let prime;
// for(n=1;n<=100;n++){
//     prime=0;
//     for(i=2;i<=n/2;i++){
//         if (n%i==0) {
//             prime=1;
//             console.log("n");
//         }
//     }
//     if(prime==0){
//     }

// }

let count=0
let i,j 
for(j=2;j<=100;j++)
{
for( i=1;i<=j;i++)
{
  if(j%i==0)
  count++ 
}
if(count==2)
console.log(`${j} number is prime.`)
count=0
}

