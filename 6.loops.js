// loops ->

// for dongusu : bir kod blokunu belirli bir sayıda ve üst üste çalıştırmak için kullanılan bir döngüdür.
// for döngüsü 3 farklı şekilde kullanılabilir.
// 1. for döngüsü :
// for (başlangıç; koşul; artış) {
//     kod bloğu
// }
// 2. for döngüsü :
// for (başlangıç; koşul; artış) {
//     kod bloğu
//     break;
// }
// 3. for döngüsü :
// for (başlangıç; koşul; artış) {
//     kod bloğu
//     continue
// }

console.log("tugberk");

for (let i = 0; i >= 5; i++) {
  console.log(i);
}

for (let i = 0; i <= 5; i++) {
  console.log(`${i} + ${i} = ${i + i}`);
}

const ulkeler = ["turkey", "irland", "england", "abd", "canada"];
const newArr = [];
for (let i = 0; i < ulkeler.length; i++) {
  newArr.push(
    ulkeler[i].charAt(0).toUpperCase() + ulkeler[i].slice(1).toLowerCase()
  ); //charAt() metodu bir stringin karakterini döndürür.
}
console.log(newArr);
ulkeler.push("denmark"); //push() metodu bir arraye eleman ekler.
console.log(ulkeler);
ulkeler.pop(); // pop() metodu bir arrayin son elemanını siler.
console.log(ulkeler);
ulkeler.shift(); //shift() metodu bir arrayin ilk elemanını siler.
console.log(ulkeler);
ulkeler.unshift("norway"); //unshift() metodu bir arrayin ilk elemanını ekler
console.log(ulkeler);
ulkeler.splice(0, 2); //splice() metodu bir arrayin belirli bir index
console.log("splice", ulkeler);
ulkeler.splice(0, 0, "sweden"); //splice() metodu bir array
console.log("splice", ulkeler);
ulkeler.splice(ulkeler.length, 0, "germany"); //splice() metodu
console.log("splice", ulkeler);

console.log("********************");

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
} //for döngüsü ile array elemanlarını toplayalım
console.log(`toplam : ${sum}`);
//for döngüsü ile array elemanlarını toplayalım
const numbers2 = [1, 2, 3, 4, 5];
let sum2 = numbers2.reduce((a, b) => a + b, 0);
console.log(`toplam : ${sum2}`);

console.log("***************");

// array elemanlarını ters çevirme
const numbers3 = [1, 2, 3, 4, 5];
console.log(numbers3);
const reversed = numbers3.reverse();
console.log(reversed);

// while -> while döngüsü : bir koşulun sağlanmasına kadar döngü devam eder.
let names = [
  "ali",
  "veli",
  "ayşe",
  "ahmet",
  "tugberk",
  "osman",
  "sukru",
  "mehmet",
];
let i = 0;
while (i < names.length) {
  console.log(
    "isim :",
    names[i].charAt(0).toUpperCase() + names[i].slice(1).toLowerCase()
  );
  i++;
}

do {
  console.log("isim", names[i]);
  i++;
} while (i < names.length);
//do-while döngüsü : bir kez çalıştıktan sonra koşul kontrol edilir.
//for döngüsü : bir koşulun sağlanmasına kadar döngü devam eder.
//for-each döngüsü : bir arrayin her bir elemanını döngü içinde
//foreach döngüsü : bir arrayin her bir elemanını döngü içinde

console.log("*******");
// for of loop -> for of döngüsü : bir arrayin her bir elemanını döngü içinde
for (name of names) {
  console.log("ad", name);
}

for (forofulkeler of ulkeler) {
  newArr.push(forofulkeler.toUpperCase());
}
console.log(newArr);
console.log("******************");
const webTechs = ["html", "css", "javascript", "react", "angular", "node"];
const bosArray = [];
for (let tech of webTechs) {
  console.log(tech.charAt(0).toUpperCase() + tech.slice(1).toLowerCase());
  bosArray.push(tech.charAt(0).toUpperCase() + tech.slice(1).toLowerCase());
}
console.log(bosArray);
console.log("****************");
//break -> döngüden çıkma
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}

for (name of names){
  if(name == "osman"){
    break;
    }
    console.log(`${name} bulundu`)
}

console.log("***********");
//continue -> döngüden atlama
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
console.log("***********");

for  (isim of names){
  if(isim == "ali"){
    continue
    }
    console.log(`${isim} es gecildi`)
}
console.log("***********");