//toLowerCase() -> butun harfleri buyuk yapar
//toUpperCase() -> butun harfleri kucuk yapar
//trim() -> bosluklari siler
//split() -> stringi bir diziye cevirir
//join() -> dizi elemanlarini birlestirir
//includes() -> stringin icinde aranan kelimeyi kontrol eder
//indexOf() -> stringin icinde aranan kelimeyi bulur
//charAt() -> stringin icinde aranan karakteri bulur
//substring() -> stringin bir parcasi
//replace() -> stringin icinde aranan kelimeyi degistirir
//concat() -> iki stringi birlestirir
//localeCompare() -> iki stringi karsilastirir
//match() -> stringin icinde aranan patterni bulur
//search() -> stringin icinde aranan patterni bulur
//replace() -> stringin icinde aranan patterni degistirir

// Array -> Diziler
let dizi = [1, 2, 3, 4, 5];
console.log(dizi);
console.log(dizi[0]);
console.log(dizi[1]);
console.log(dizi[2]);
console.log(dizi[3]);
console.log(dizi[4]);
console.log(`dizi uzunlug:`, dizi.length);
console.log(`dizinin sonuncusunu almak icin:`, dizi.length - 1);

const arr = Array();
console.log(arr);

const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
console.log(numbers);
console.log(numbers.length);

const ben = ["Tugberk", "Savas", 28, "Istanbul"];
console.log(ben);
console.log(ben.length);

let ben2 = [
  "tugberk",
  "savas",
  50000,
  { country: "Turkey", city: "Istanbul" },
  { skills: ["html", "css", "js", "react", "node"] },
];
console.log(ben2);

console.log("*****************");
//split()
let ismim = "Tugberk Savas";
console.log(ismim);
let splitIsmim = ismim.split("");
console.log(splitIsmim);

let companiesString = "Facebook,Google,Microsoft,Apple,IBM";
console.log(companiesString);
let companies = companiesString.split(","); // virgul ile ayir
console.log(companies);
console.log(companies.length);

let textDeneme =
  "I love teaching and empowering people.I teach HTML , CSS , JavaScript, React,Python";
console.log(textDeneme);
let textDenemeArray = textDeneme.split(" ");
console.log(textDenemeArray);
console.log(
  (textDenemeArray[2] =
    textDenemeArray[2].charAt(0).toUpperCase() +
    textDenemeArray[2].slice(1).toLowerCase())
);
console.log(textDenemeArray.join(" "));

console.log("*****************");

const numbers2 = [1, 2, 3, 4, 5, 6];
console.log(numbers2);
numbers2[0] = 10;
numbers2[1] = 20;
console.log(numbers2);

//concat -> arrayleri birlestirir
let meyve = ["elma", "armut", "kayısı"];
let sebzeler = ["patates", "karnabahar", "havuç"];
let tumYemekler = meyve.concat(sebzeler);
console.log(tumYemekler);
console.log(tumYemekler.join(","));
console.log(tumYemekler.join(" ve "));
let tumYemeklerBuyuk = tumYemekler.map(
  (yemek) => yemek.charAt(0).toUpperCase() + yemek.slice(1).toLowerCase()
);
console.log(tumYemeklerBuyuk.join(" ve "));
console.log("stringe cevirme: ", tumYemekler.toString());
console.log("*******************");

// indexof() -> bir elemanin indexini bulur
let numbers3 = [1, 2, 3, 4, 5, 6];
console.log(numbers3.indexOf(4));
console.log(numbers3.indexOf(7)); // 7 yok ise -1 dondurur
console.log(numbers3.indexOf(6, 2)); // 6 indexi 1'den baslayacak
console.log("******************");

//includes() -> bir elemanin var olup olmadigini kontrol eder
let numbers4 = [1, 2, 3, 4, 5];
console.log(numbers4.includes(4));
console.log(numbers4.includes(7));
console.log(numbers4.includes(4, 2)); // 4 indexi 2'den
console.log("*******************");

//push() -> sonuna ekler
let numbers5 = [1, 2, 3, 4, 5];
console.log(numbers5);
numbers5.push(6);
console.log(numbers5);
numbers5.push(7, 8, 9);
console.log(numbers5);

//slice() -> bir array'den bir parca alir
let isimler1 = ["tugberk", "enes", "prototurk", "hilmi", "evliya"];
console.log(isimler1);
let isimlerSplit = "tugberk".split(" ");
console.log(isimlerSplit);
console.log(isimler1.slice(0, 3));

//splice() -> bir array'den bir parca siler ve yeni eleman ekler
let isimler2 = ["tugberk", "enes", "prototurk", "hilmi", "evliya"];
console.log(isimler2);
isimler2.splice(1, 2, "mehmet2", "tayfun3");
console.log(isimler2);
isimler2.push("pushedilen");
console.log(isimler2);
isimler2.unshift("unshifted");
console.log(isimler2);

// pop() -> son elemani siler
isimler2.pop();
console.log("pop", isimler2);
//shift() -> ilk elemani siler
isimler2.shift();
console.log("shift", isimler2);
//unshift() -> ilk elemani ekler
isimler2.unshift("ilkeklenen");
console.log("ilkeklenen", isimler2);

console.log("**************");

let tersCevirme = "tugberk".split("").reverse().join("");
console.log(tersCevirme);

//a'dan zye gore array'i sıralama
let isimler3 = ["tugberk", "enes", "prototurk", "osman"];
console.log(isimler3);
console.log(isimler3.sort());

let numbers6 = [5, 2, 10, 8, 1, 9];
console.log(numbers6);
console.log(numbers6.sort());

let numbers7 = [5, 8, 1, 9,{},2,[10,20,30],3]
console.log(numbers7[6][0]);
console.log(numbers7[4]);


