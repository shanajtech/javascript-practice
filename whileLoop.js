// 2 থেকে 10 পর্যন্ত সব even number print করো।

let i = 2
while(i <= 10){
console.log(i);
i=i+2
}

// while loop ব্যবহার করে 20 থেকে 5 পর্যন্ত 3 করে কমিয়ে number print করো।
// অর্থাৎ শুরু হবে 20 থেকে, প্রতিবার 3 কমবে এবং 5 পর্যন্ত পৌঁছালে সেটাও print হবে।

let x = 20
while(x >= 5){
console.log(x);
x = x-3
}

// while loop দিয়ে 1 থেকে 20 পর্যন্ত সব number check করবে, কিন্তু console-এ শুধু সেই
//  numberগুলো print করবে যেগুলো even এবং একই সাথে 3 দিয়ে নিঃশেষে ভাগ যায়।

let y = 1
while (y <= 20) {
    if (y % 3 === 0 && y % 2 === 0) {
        console.log(y);
        
    }
    y++
}