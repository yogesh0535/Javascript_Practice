let n=prompt("Enter the number: ");
let l=n.toString().length;
let r=0;
let rev=0
for(let i=1;i<=l;i++){
    r = n%10;
    rev = rev*10+r;
    n = Math.floor(n/10);
}
console.log(`Reverse of ${n} is $(rev)`);
