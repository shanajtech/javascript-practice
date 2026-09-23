let totalPrice = 4500;
// totalPrice 5000 বা তার বেশি হলে
// → "20% Discount"
// totalPrice 3000 বা তার বেশি হলে
// → "10% Discount"
// এর কোনোটাই না হলে
// → "No Discount"
if(totalPrice >= 5000){
console.log("20% Discount");
}else if(totalPrice >= 3000){
console.log("10% Discount");
}else{
 console.log("No Discount");
}

let isLoggedIn = true;
let isVerified = true;
let isBlocked = false;
// Logged in + Verified + Blocked না হলে:
// "Welcome to Dashboard"
// অন্যথায়:
// "Access Denied"
if(isLoggedIn && isVerified && !isBlocked){
console.log( "Welcome to Dashboard");
}else{
   console.log( "Access Denied"); 
}