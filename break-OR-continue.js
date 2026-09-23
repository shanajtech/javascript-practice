
// এবার একই কাজটা for loop দিয়ে লেখো: 1 থেকে শুরু হবে, 
// 20 পর্যন্ত যাওয়ার কথা, কিন্তু 8 print হওয়ার পরেই break দিয়ে stop করবে।
let i = 1;
while (i <= 10) {
//   console.log(i);
    if (i === 8) {
        break;
    }

    i++;
}
// or
for (let i = 1; i <= 10; i++) {

    // console.log(i);

    if (i === 8) {
        break;
    }
}
// continue = পুরো loop বন্ধ করো না, শুধু এই iteration-টা skip করো। তারপর next iteration-এ চলে যাও।
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    // console.log(i);
}
// একটা for loop লিখবে যেটা 1 থেকে 15 পর্যন্ত যাবে।
// কিন্তু
// যে numberগুলো 3 দিয়ে নিঃশেষে ভাগ যায়, সেগুলো
//  continue ব্যবহার করে skip করবে। বাকি numberগুলো console-এ print করবে।
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0) {
        continue;  
    }
    console.log(i);
    
}

let languages = ["HTML", "CSS", "Python", "React"];
languages[2] = "JavaScript";
console.log(languages);
