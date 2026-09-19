// ======================================================
// JavaScript Basic Practice
// Topics:
// Variable, Arithmetic Operator, Modulus,
// Comparison Operator, Logical Operator
// ======================================================


// ------------------------------------------------------
// 1. PRODUCT TOTAL PRICE
// ------------------------------------------------------

const productName = "Keyboard";
const price = 1200;
let quantity = 3;
let totalPrice = price * quantity;
console.log(productName);
console.log(totalPrice);
// Output:
// Final Price: 3600

// ------------------------------------------------------
// 2. ADD DELIVERY CHARGE
// ------------------------------------------------------

const deliveryCharge = 100;
let finalPrice = totalPrice + deliveryCharge;
console.log(finalPrice);
// Output:
// Final Price: 3700

// ------------------------------------------------------
// 3. COMPARISON OPERATOR
// Final Price কি 3000 টাকার বেশি?
// ------------------------------------------------------

let isPriceAbove3000 = finalPrice > 3000;
console.log(isPriceAbove3000);
// Output:
// true

// ------------------------------------------------------
// 4. MODULUS OPERATOR
// Quantity even number কিনা check করা
// ------------------------------------------------------

let isQuantityEven = quantity % 2 === 0;
console.log(isQuantityEven);
// quantity = 3
// 3 % 2 = 1
// তাই Output:
// false

// ------------------------------------------------------
// 5. LOGICAL AND OPERATOR (&&)
// দুইটা condition-ই true হতে হবে
// ------------------------------------------------------

let isLoggedIn = true;
let isPremiumMember = false;
let canAccessPremium = isLoggedIn && isPremiumMember;
console.log(canAccessPremium);
// true && false
// Output:
// false

// ------------------------------------------------------
// 6. LOGICAL OR OPERATOR (||)
// যেকোনো একটি condition true হলেই result true
// ------------------------------------------------------

let hasDiscount = isLoggedIn || isPremiumMember;
console.log("Has discount?", hasDiscount);
// true || false
// Output:
// true


// ------------------------------------------------------
// 7. AND (&&) - দুইটাই true
// ------------------------------------------------------

let userLoggedIn = true;
let userPremiumMember = true;
let premiumAccess = userLoggedIn && userPremiumMember;
console.log(premiumAccess);
// true && true
// Output:
// true

// ------------------------------------------------------
// 8. AGE + NID CHECK
// Age 18 বা তার বেশি AND NID থাকতে হবে
// ------------------------------------------------------

let age = 22;
let hasNid = true;
let isEligible = age >= 18 && hasNid;
console.log(isEligible);
// true && true
// Output:
// true

// ------------------------------------------------------
// 9. EVEN NUMBER CHECK
// ------------------------------------------------------

let number = 24;
let remainder = number % 2;
let isEven = remainder === 0;
console.log(remainder);
console.log(isEven);
// 24 % 2 = 0
// Output:
// Remainder: 0
// Is Even: true


// ------------------------------------------------------
// 10. LOGICAL NOT OPERATOR (!)
// User-এর বয়স 18+, ticket আছে এবং banned না
// ------------------------------------------------------

let userAge = 20;
let hasTicket = true;
let isBanned = false;
let ageAndTicketCheck = userAge >= 18 && hasTicket;
let canEnter = ageAndTicketCheck && !isBanned;
console.log(canEnter);

// age >= 18       → true
// hasTicket       → true
// isBanned        → false
// !isBanned       → true
//
// true && true && true
//
// Output:
// true

// ------------------------------------------------------
// 11. SAME LOGIC IN ONE EXPRESSION
// ------------------------------------------------------

let finalCheck =
    userAge >= 18 &&
    hasTicket &&
    !isBanned;
console.log("Final Check:", finalCheck);
// Output:
// true


// ======================================================
// QUICK REVISION
// ======================================================

// +   → Addition
// -   → Subtraction
// *   → Multiplication
// /   → Division
// %   → Remainder
// **  → Power

// >   → Greater than
// <   → Less than
// >=  → Greater than or equal
// <=  → Less than or equal

// ==  → Loose Equality
// === → Strict Equality

// &&  → AND
//       সব condition truthy হলে result truthy

// ||  → OR
//       অন্তত একটি condition truthy হলে result truthy

// !   → NOT
//       truthy/falsey অবস্থা উল্টে দেয়

// Example:
// !true  → false
// !false → true


// ======================================================
// IMPORTANT REVISION EXAMPLES
// ======================================================

console.log(10 == "10");
// true
// == type conversion করতে পারে
console.log(10 === "10");
// false
// === strict comparison করে
// 10 = number
// "10" = string
console.log(24 % 2 === 0);
// true
// 24 একটি even number
console.log(25 % 2 === 0);
// false
// 25 একটি odd number















// const productPrice = 850;
// let quantity = 4;
// const deliveryCharge = 120;

// Code লিখে বের করো: productPrice × quantity, তারপর delivery charge যোগ করে finalPrice। এরপর check করবে finalPrice 
// 3000-এর বেশি বা সমান কিনা। Console-এ final price এবং true/false দুটোই দেখাবে।

const productPrice = 850;
let quantity = 4;
const deliveryCharge = 120;
let fullProductPrice = productPrice * quantity ;
// fullProductPrice 3400
let finalPrice = fullProductPrice + deliveryCharge;
// finalPrice 3520
let isFinalPrice = finalPrice > 3000 || finalPrice < 3000;
// isFinalPrice True



let number = 37;
let Even = true;

// 37 even হলে true, না হলে 
// false আসবে। তারপর number 30-এর চেয়ে বড় কিনা সেটাও আলাদা variable-এ check করবে।

let isEven = number % 2 === 0;
// iseven false
let cheackNumber = number > 30;
// cheackNumber true


let isLoggedIn = true;
let isVerified = true;
let isBlocked = false;

// Logged in AND Verified AND Blocked না হয়।
// শুধু && এবং ! ব্যবহার করে একটা expression-এ result বের করো।

let openDashBord = isLoggedIn && isVerified && !isBlocked
// openDashBord true



let age = 17;
let hasParentPermission = true;

// User-এর age 18+ অথবা parent permission থাকলে registration করতে পারবে।
// এখানে তোমাকে বুঝতে হবে && নাকি || লাগবে। Variable বানাবে canRegister এবং console-এ result দেখাবে।

let canRegister = age >= 18 || hasParentPermission
console.log(canRegister);
// canRegister true


