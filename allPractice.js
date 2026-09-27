// "React" আছে কি না এবং "Python" আছে কি না।
let courses = ["JavaScript", "React", "Node", "MongoDB"];
console.log(courses.includes("React"));
console.log(courses.includes("Python"));

// indexOf() ব্যবহার করে "Banana" এবং "Pineapple"—এই দুইটার result console-এ বের করো।
let fruits = ["Mango", "Apple", "Orange", "Banana", "Guava"];
console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("Pineapple"));


// concat() ব্যবহার করে এমন একটা নতুন skills Array বানাও:
let frontend = ["HTML", "CSS", "JavaScript"];
let framework = ["React", "Vue"];
let technologies = frontend.concat(framework)
console.log(technologies);


// slice() ব্যবহার করে শুধু এই তিনটা নিয়ে নতুন skills Array বানাবে:["CSS", "JavaScript", "React"]
let technology = ["HTML", "CSS", "JavaScript", "React", "Node", "MongoDB"];
let techShallowCopy = technology.slice(1 , 4)
console.log(techShallowCopy);

// splice() ব্যবহার করে শুধু "Python" remove করবে, যাতে final Array হয়:
// ["HTML", "CSS", "JavaScript", "React"]
let technologi = ["HTML", "CSS", "JavaScript", "Python", "React"];
technologi.splice(3 , 1)
console.log(technologi);

// splice() ব্যবহার করে "Python"-কে "JavaScript" দিয়ে replace করবে।
// Final Array হবে:
// ["HTML", "CSS", "JavaScript", "React"]
let technologie = ["HTML", "CSS", "Python", "React"];
technologie.splice(2,1,"JavaScript")
console.log(technologie);

// sort() ব্যবহার করে Array-টা alphabetical order-এ সাজিয়ে console-এ দেখাও।
let technologiess = ["React", "CSS", "JavaScript", "HTML"];
technologiess.sort();
console.log(technologiess);



// reverse() ব্যবহার করে final output করবে:
// ["Node", "React", "JavaScript", "CSS", "HTML"]
let languages = ["HTML", "CSS", "JavaScript", "React", "Node"];
languages.reverse()
console.log(languages);


// for loop ব্যবহার করে প্রতিটি fruit একটা একটা করে console-এ print করবে।
let fruitss = ["Mango", "Apple", "Banana", "Orange", "Guava"];
for(let i = 0; i<fruitss.length; i++){
console.log(fruitss[i]);
}


// while loop ব্যবহার করে প্রতিটি color একটা একটা করে console-এ print করো।
let colors = ["Red", "Green", "Blue", "Yellow", "Black"];
let x = 0
while(x<colors.length){
console.log(colors[x]);
x++
}


// reverse() method ব্যবহার করা যাবে না।
// নিজের loop logic দিয়ে নতুন একটা reversedFruits Array বানাবে, যার final result হবে:
// ["Orange", "Banana", "Apple", "Mango"]
let fruit = ["Mango", "Apple", "Banana", "Orange"];
for(let y = fruit.length-1; y >= 0; y--){
console.log(fruit[y]);
}

// or
// notun array chai tahole
let fruity = ["Mango", "Apple", "Banana", "Orange"];
let reversed =[]
for(let y = fruity.length-1; y >= 0; y--){
    reversed.push(fruity[y])
}
console.log(reversed);



// Code লিখে console-এ বের করবে:
// পুরো String-এর length
// প্রথম character
// index 4-এর character
// শেষ character — কিন্তু শেষ index number hardcode করবে না; length ব্যবহার করে বের করবে।
"JavaScript"
let lang = "JavaScript"
console.log(lang.length);
console.log(lang[0]);
console.log(lang[3]);
console.log(lang[lang.length - 1]);

// একই String থেকে console-এ প্রথমে:
// javascript
// এবং তারপর:
// JAVASCRIPT
let language = "JaVaScRiPt";
let lowerLanguage = language.toLowerCase()
let upperLanguage = language.toUpperCase()
console.log(lowerLanguage);
console.log(upperLanguage);

