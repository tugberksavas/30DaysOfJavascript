// set ve map array ve obje benzer
// setin arraydan farki arrayin indexi degisken degil sabit
// setin obje gibi kullanilmasi arrayin obje gibi kullanilmasindan
// farkli
// setin obje gibi kullanilmasinda key ve value kullanilir
// setin array gibi kullanilmasinda index kullanilir

//mapin objekten en buyuk farki objeckte keyleri anahtari sadece sitring
//mapte keyleri string, number, boolean, object, array gibi hersey olabilir

const names = new Set(["tugberk", "mehmet", "ayse"]);
const namesSet = new Set();
names.add("fatma"); // sete eleman ekleme
names.delete("mehmet"); // setten eleman silme
names.has("sette eleman var mi", "tugberk"); // sette eleman var mi
names.size; // setin eleman sayisi
// names.clear() // seti temizleme
names.forEach((value) => console.log("setin elemanlari", value)); // setin elemanlarini yazdir
names.values(); // setin elemanlarini array olarak donustur

console.log(names);
console.log(names.has("sette eleman var mi", "tugberk"));
console.log(names.size);

for (let name of names) {
  console.log(
    "Ad:",
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  );
}
console.log("*******");

names.forEach((name) => console.log(name));
[...names].map((name) => console.log(name));
console.log("*******");

const uniqName = [
  "tugberk",
  "mehmet",
  "ahmet",
  "ahmet",
  "mehmet",
  "hakan",
  "tugberk",
];
console.log(uniqName); // arrayin elemanlarini yazdir
console.log(new Set(uniqName)); // setin arraydan farki arrayin indexi degisken degil sabit
console.log([...uniqName]); // arrayin obje gibi kullanilmasi
console.log("************");
const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

const langSet = new Set(languages); // setin arraydan farki arrayin indexi degisken degil sabit
console.log(langSet); // setin elemanlarini yazdir
console.log(langSet.size);
console.log([...langSet]); // setin array gibi kullanilmasi
const counts = []; // array
const count = {}; // object

for (let l of langSet) {
  const filtredLang = languages.filter((lng) => lng === l);
  counts.push(filtredLang.length); // array
  counts.push({ lang: l, count: filtredLang.length }); // object
}
console.log(counts); // array

console.log("----------------");

// union of sets --> İki kümenin birleşimini bulmak spread operatörü kullanılarak elde edilebilir.
//A kümesi ve B kümesinin birleşimini bulalım (A U B)

const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([4, 5, 6, 7, 8]);
const union = [...setA, ...setB];
console.log(union);
console.log(new Set(union));
console.log("************");

// intersection of sets --> İki kümenin kesişimini bulmak spread operatörü kullanılarak
// elde edilebilir. A kümesi ve B kümesinin kesişimini bulalım (
// A ∩ B)
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];

let A = new Set(a);
let B = new Set(b);

let c = a.filter((num) => B.has(num));
let C = new Set(c);

console.log(C);

//diffrence of sets --> İki kümenin farkını bulmak spread operatörü kullanılarak elde edilebilir.
// A kümesi ve B kümesinin farkını bulalım (A - B)
let d = [...A].filter((num) => !B.has(num));
console.log(d);
console.log(new Set(d)); // setin elemanlarini yazdir
console.log("************");

//Map -> Map bir obje olusturur. Map objesi key-value pair'ler ile olust
//urulur. Map objesi array gibi kullanilabilir. Map objesi arrayin indexi
//degisken degildir sabittir. Map objesi arrayin elemanlarini
//degerlestirir. Map objesi arrayin elemanlarini degistirebilir
//Map objesi arrayin elemanlarini silinebilir.
let map = new Map();
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");
console.log(map.get("name")); // John
console.log(map.get("age")); // 30
console.log(map.get("city")); // New York
console.log(map.has("name")); // true
console.log(map.has("age")); // true
console.log(map.has("city")); // true
console.log(map.has("country")); // false
console.log(map.size); // 3
console.log(map.keys()); // MapKeys { 'name', 'age', 'city' }
console.log(map.values()); // MapValues { 'John', 30, 'New York' }
console.log("**********");
let text = new Map()
text.set("1","str")
text.set(1, "num1")
text.set(true,"bool1")
text.set(false,"bool2")
console.log(text.get(1));
console.log("***********");
const tayfun =  {
    name:"tayfun",
}
const ahmet = {
    name:"ahmet"
}
const tayfunahmet = new Map()
tayfunahmet.set(tayfun,10)
tayfunahmet.set(ahmet,20)
console.log(tayfunahmet);
console.log(tayfunahmet.get(tayfun));
console.log("***********");



