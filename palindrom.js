let temp=prompt("Enter the number: ");
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
