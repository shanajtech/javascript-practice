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


