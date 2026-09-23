// Task: 10 থেকে 2 পর্যন্ত ২ করে কমিয়ে print করো।

for(let i = 10; i >= 2; i = i-2){
// console.log(i);
}

// 15 থেকে 3 পর্যন্ত 3 করে কমিয়ে print করো।
for(let i = 15; i >= 3; i = i-3){
// console.log(i);
}

// এবার next important জিনিস: loop-এর ভিতরে condition ব্যবহার করা।
//  যেমন 1–10 পর্যন্ত loop চলবে, কিন্তু আমরা শুধু even number print করব:
// তুমি আগে Odd/Even-এ % শিখেছ। এবার বলো, if-এর condition-এ কী লিখবে যাতে শুধু 2, 4, 6, 8, 10 print হয়?

for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        // console.log(i);
    }

}

// Task: 1 থেকে 10 পর্যন্ত শুধু odd number print করো।
for (let i = 1; i <= 10; i++) {

    if (i % 2 !== 0) {
        // console.log(i);
    }

}


// ছোট Challenge 🔥
// 1 থেকে 20 পর্যন্ত loop চালাবে, কিন্তু শুধু সেই numberগুলো 
// print করবে যেগুলো 5 দিয়ে নিঃশেষে ভাগ যায়।
for(let i = 5; i <= 20; i = i+5){
// console.log(i);
}

for (let i = 1; i <= 20; i++) {

    if (i % 5 === 0) {
        // console.log(i);
    }

}

// 1 থেকে 20 পর্যন্ত loop চালিয়ে শুধু যেসব number 3 দিয়ে নিঃশেষে ভাগ যায় সেগুলো print করো।
for (let i = 1; i <= 20; i++) {

    if (i % 3 === 0) {
   
    }

}

// ১ থেকে ৩০ পর্যন্ত সব number check করবে।
// কিন্তু console-এ শুধু সেই numberগুলো print করবে যেগুলো—
// একই সাথে 2 এবং 3—দুইটা number দিয়েই নিঃশেষে ভাগ যায়।
// যেমন কোনো number শুধু 2 দিয়ে ভাগ গেলে হবে না, শুধু 3 দিয়ে ভাগ গেলেও হবে না। দুইটা condition-ই true হতে হবে।
// Expected output আমি ইচ্ছা করে দিচ্ছি না। 😉
// Rules:
// for loop ব্যবহার করবে।
// if condition ব্যবহার করবে।
// পুরো code শুরু থেকে শেষ পর্যন্ত তুমি লিখবে।
// আগে code run করে answer বের করার চেষ্টা না করে logic দিয়ে লেখার চেষ্টা করো।
for(let i = 1;  i <= 30; i++){
if(i % 6 === 0 ){
console.log(i);

}
}

// or

for(let i = 1;  i <= 30; i++){
if(i % 2 === 0 && i % 3 === 0){
console.log(i);

}
}
