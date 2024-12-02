//  Regular-Expressions - Düzenli ifade veya RegExp, verilerdeki desenleri bulmaya yardımcı olan küçük bir programlama dilidir.
//  Bu dil, metin içerisindeki desenleri bulmak için kullanılır.

// The flag could be g, i, m, s, u or y.
//  Flaglar g, i, m, s, u veya y olabilir.

//Düzenli ifade iki parametre alır. Bir zorunlu arama deseni ve isteğe bağlı bir bayrak

//g: tüm metinde bir desen arayan küresel bir bayrak
//i: büyük/küçük harfe duyarlı olmayan bayrak (hem küçük hem de büyük harfleri arar)
//m: çok satırlı

//regex
//1- RegExp cconstructor
// regex tanimi
// ben 28 yasindayim ve 1996 yilinda dogdum

let str = `ben 28 yasindayim ve 1996 yilinda dogdum`;
let username = "tugberk-savas";

// let pattern = "love";
// let flag = "gi";
// // let RegExp = new RegExp(pattern);
// let regEx = new RegExp(pattern, flag);

// let regex = /love/gi;

let word = /salak/;
let comment = prompt("yorumunu yaz ");

console.log(word.test(comment));

if (word.test(comment)) {
  alert("hayir sen salaksiz");
} else {
  alert("sen salak degilsin");
}
