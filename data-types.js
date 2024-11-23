let numOne = 3;
let numTwo = "3";

console.log(numOne == numTwo);

let js = "javascript";
let py = "python";

console.log(js == py);

let nums = [1, "tugberk", 3];

console.log(nums);

nums[1] = 2;
console.log(nums);

// let user1 = { name: "tugberk", surname: "savas", age: 25 };
// let user2 = { name: "tugberk", surname: "savas", age: 25 };
// console.log("user:", user1 == user2);

let age = 28;
// const PI = 3.14
const gravity = 9.81;
console.log(age, gravity);

console.log("****************");

const PI = Math.PI;
console.log(PI);

console.log(Math.round(PI)); //düz yazarliyor
console.log(Math.ceil(PI)); //yukari yuvarlama
console.log(Math.floor(PI)); //asagı yuvarlama
console.log(Math.abs(-PI)); //kesi
console.log(Math.pow(PI, 2)); //kuvvet
console.log(Math.sqrt(PI)); //karekök
console.log(Math.max(1, 2, 3, 4, 10)); //
console.log(Math.min(1, 2, 3, 4, 5)); //

console.log("***************");
let date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log("*************");

let random = Math.random();
console.log(random);
console.log(Math.floor(random * 10) + 1); //1-10 arası rastgele sayi
console.log(Math.ceil(random * 10) + 1); //

console.log(Math.abs(-10)); //mutlak
console.log(Math);
console.log("*************");

let paragraf = "benim \\ ismim\ntugberk";
console.log(paragraf);

// \n : new line
// \r : carriage return
// \t : tab
// \b : backspace
// \f : form feed
// \v : vertical tab
// \\ : back slach
// \\" : double quote
console.log("**************");

let fullName = "Tugberk ";
let surname = "Savas";

let full = `${fullName}${surname}`;
console.log(full);

let a = 5;
let b = 10;

let c = `${a + b}`;
console.log(c);

let d = `benim ismim ${fullName} ve soyadim ${surname}`;
console.log(d);
console.log("**************");

let frontend = 'frontend';
console.log("frontend uzunlugu : ", frontend.length);
console.log("frontend 0. index : ", frontend[0]);
console.log("frontend 3. index : ", frontend[3]);

let dizi = ['tugberk', 'savas', 'frontend', 'javascript'];
console.log(dizi.length);
console.log(dizi[0]);

let word = "tugberk";
word = word.toUpperCase()
console.log(word);
word = word.toLowerCase()
console.log(word);
console.log("**************");
let stringdeneme = 'JavaScript'
console.log(stringdeneme.substr(4,6))    // Script

let string = 'JavaScript'

console.log(string.substring(4,9))     // Java
console.log(string.substring(4,10))    // Script
console.log(string.substring(4))       // Script

// split() --->>> stringi diziye cevirmek
let string1 = 'tugberk savas frontend javascript'
let dizi1 = string1.split()
let dizi2 = string1.split(' ')
console.log(dizi1);
console.log(dizi2);

// trim()  --->>>> bosluklari siler
let string2 = '     tugberk savas frontend javascript     '
console.log(string2.trim());


//includes() --->>>> icinde var mi yok mu
let string3 = 'tugberk savas frontend javascript'
console.log(string3.includes('savas'));
console.log(string3.includes('java'));

//replace() -> >> degistir
let string4 = 'tugberk savas frontend javascript'
console.log(string4.replace('savas', 'tugberk'));
console.log(string4.replace('javascript', 'java'));

//charAt() -> >> indexe gore karakteri getir
let string5 = 'tugberk savas frontend javascript'
console.log(string5.charAt(0));

//charCodeAt() -> indexe gore karakterin ASCII kodunu getir
let string6 = 'tugberk savas frontend javascript'
console.log(string6.charCodeAt(0));

//indexOf() -> bulundugu ilk indexi getirir
let string7 = 'tugberk savas frontend javascript'
console.log(string7.indexOf('backend'));
console.log(string7.indexOf('savas'));

//lastindexOf() -> bulundugu son indexi getirir
let string8 = 'tugberk savas frontend backend javascript backend backend'
console.log(string8.lastIndexOf('backend'));

//startsWith() -> bunla mi basliyor mu
let string9 = 'tugberk savas frontend javascript'
console.log(string9.startsWith('tugberk'));
console.log(string9.startsWith('javascript'));

//endwith() -> bunla mi bitiyor mu
let string10 = 'tugberk savas frontend javascript'
console.log(string10.endsWith('javascript'));
console.log(string10.endsWith('savas'));

//search() -> ilk eslesenin indexini getirir
let string11 = 'tugberk savas frontend javascript'
console.log(string11.search('savas'));
console.log(string11.search('backend'));

//match() -> ilk esleseni getirir
let string12 = 'tugberk savas frontend javascript'
console.log(string12.match('savas'));
console.log(string12.match('backend'));
console.log(string12.match(/backend/));
console.log(string12.match(/backend/g));
console.log(string12.match(/backend/gi));
