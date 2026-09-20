let number = 58;

if (number % 2 === 0){
console.log("58 is an Even Number");
}else{
    console.log("58 is an Odd Number");
}
// তুমি নিজে if...else লিখবে।
// Rule:
// Even হলে → "58 is an Even Number"
// Odd হলে  → "58 is an Odd Number"


let ternaryNumber = 37;
let result = ternaryNumber % 2 === 0 ? "even" : " odd" ;
 console.log(result);
// let result = /* তোমার ternary logic */;
// console.log(result);

let isLoggedIn = true;
let isVerified = false;
// User logged in AND verified হলে → "Dashboard"
// না হলে → "Please Login or Verify"
// শুধু ternary + && ব্যবহার করে message variable বানাও:
 let message = isLoggedIn && !isVerified ? "Dashboard" : "Please Login or Verify";
 let messageess = isLoggedIn && isVerified ? "Dashboard" : "Please Login or Verify";
 console.log(message);
 console.log(messageess);
 