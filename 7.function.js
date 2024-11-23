// ACIKLAMA

// function -> fonksiyon
// parameter -> parametre
// return -> geri döndürme
// console.log() -> konsola yazdırma
// console.error() -> hata mesajı yazdırma
// console.warn() -> uyarı mesajı yazdırma
// console.clear() -> konsol temizleme
// console.table() -> tablo formatında yazdırma
// console.time() -> zamanlama

//function() -> fonksiyonu çağırmak için parantez kullanıyoruz.

//parametresiz bir fonksiyon bildirme
function functionName() {
  // kod buraya gelir
}
functionName(); // fonksiyonu ismiyle ve parantezlerle çağırma

function addTwoNumbers() {
  let num1 = 5;
  let num2 = 10;
  let result = num1 + num2;
  console.log(result);
}

addTwoNumbers();

function printFullName() {
  let firstName = "Ahmet";
  let lastName = "Kaya";
  let fullName = firstName + " " + lastName;
  return fullName;
}
console.log(printFullName());
// console.log(printFullName()); fonksiyonu çağırmak için parantez kullanıyoruz.

function multiply(num1, num2) {
  let total = num1 * num2;
  return total;
}
let total = multiply(5, 2);
console.log("toplam:", total);
// fonksiyonu çağırmak için parantez kullanıyoruz.

function sumArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

let dizi = [2, 4, 6, 8, 10];
// sumArrayValues(dizi);
console.log("Toplam:", sumArrayValues(dizi));

console.log("***************");
// sinirsiz parametre alma
function sumAllNums() {
  console.log(arguments);
}
sumAllNums(1, 2, 3, 4, 5, 6, 7, 8);

function topla() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log("toplam:", topla(2, 5, 7, 9, 10));
console.log("***************");
//anonymous function -> fonksiyon ismi yok
const sayHello = function (name) {
  return `hello ${name}`;
};
console.log("say Hello:", sayHello("Ahmet"));

console.log("**********kendi kendini cagiran fonksyion*******************");
(function () {
  console.log("yooo");
})();
// fonksiyonu çağırmak için parantez kullanıyoruz.
let sayHello2 = (function (name) {
  console.log(`hello ${name}`);
})("tayfun");

//normal function(regular function)
function hello(name) {
  return `hello ${name}`;
}
console.log(hello("normal function"));

// Arrow function -> altarnetif fonksiyon
const arrowFunction = (name) => {
  return `hello ${name}`;
};
console.log(arrowFunction("arrow function"));

const deneme = (num1, num2, ...numberss) => {
  console.log(num1);
  console.log(num2);
  console.log(numberss);
};

deneme(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log("****************");
// callback fonksiyon
function add(num1, num2, callback) {
  const result = num1 + num2;
  callback(result);
}
add(5, 7, function (result) {
  console.log(result);
});

console.log("***********");
function text (num1,num2=2){
    return num1*num2
}
console.log(text(10));
console.log(text(10,5));



