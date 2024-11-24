// Function -> Function
// Function -> Yüksek dereceli fonksiyonlar, başka bir fonksiyonu parametre olarak alan veya bir fonksiyonu değer olarak döndüren fonksiyonlardır. Parametre olarak geçirilen fonksiyona geri çağırma denir.
function add(a, b) {
  return a + b;
}
console.log(add(5, 7)); // Output: 12

// Callback Fonksiyon
// Callback fonksiyon, bir fonksiyonun içinde başka bir fonksiyonun çağrılmasıdır.

const callback = (n) => {
  return n ** 2;
};

function cube(callback, n) {
  return callback(n) * n;
}
console.log(cube(callback, 5)); // Output: 125
console.log(cube(callback, 3));
console.log("**********************");
const a = (s1) => {
  const b = (s2) => {
    const c = (s3) => {
      return s1 + s2 + s3;
    };
    return c;
  };
  return b;
};
console.log(a(5)(10)(20));
console.log("***********");

const numbers = [1, 2, 3, 5, 7, 10];
let total = 0;
numbers.forEach((number) => (total += number));
console.log(total);
console.log("***********");

function sayHello() {
  console.log("Hello");
}
// setTimeout(sayHello,1000) // 1 saniye sonra sayHello fonksiyonunu çağırır.
// setInterval(sayHello,5000) // 5 saniye aralıklarla çalışır
console.log("***********");

// function merhaba (){
//     console.log("merhaba");
// }

// const interval = setInterval(merhaba,2000) // 5 saniye aralıklarla çalış

// const timeout = setTimeout(()=>{
//     clearInterval(interval)
//     console.log(`${interval} interval islemi iptal edildi` );
// },5000)

// setTimeout(()=> {
//     clearTimeout(timeout)
//     console.log("timeout islemi iptal edildi,interval devam edecek");
// },2000)

console.log("***********");

const numberIndex = [1, 2, 3, 4, 5, 6];
let toplam = 0;
let calculate = (number, index) => (toplam += (number, index));
numberIndex.forEach(calculate);
console.log(toplam);
console.log(
  "filter metodu",
  numberIndex.filter((number) => number > 2)
);

console.log("***********");

const numbers2 = numberIndex.map((number) => number * 2);
console.log("map metodu", numbers2);

let users = [
  { id: 1, name: "ahmet", age: 25, gender: 1 },
  { id: 2, name: "mehmet", age: 30, gender: 1 },
  { id: 3, name: "ali", age: 35, gender: 1 }, // id 3 olan kullanıcıya 40 yaşında olmasını istiyoruz
  { id: 4, name: "ayse", age: 20, gender: 2 },
];

users = users.map((user) => {
  if (user.id == 2) {
    user.name = "hakan";
  }
  return user;
});
console.log(users);
console.log("*************");

// filter () methodu bir dizi elemanını bir koşula göre filtreler.
const women = users.filter((user) => user.gender == 2);
const men = users.filter((user) => user.gender == 1 && user.age >27 ) ;

console.log(men);
console.log("*********");
// reduce() methodu bir dizinin elemanlarını birleştirir.
const totalAge = users.reduce((acc, user) => acc + user.age, 0);
console.log(totalAge);

const reduceNumber = [2,4,6,8]
console.log(
    reduceNumber.reduce((oldValue,currentValue)=>{
        return oldValue+currentValue
    },0)
);

console.log("***********");
// some() methodu bir dizi elemanının koşula uymasını kontrol eder.
const hasMen = users.some((user) => user.gender == 1);
console.log(hasMen);
console.log("***********");
// every() methodu bir dizi elemanının tüm elemanlarının koşula uymasını
// kontrol eder.
const allMen = users.every((user) => user.gender == 1);
console.log(allMen);
console.log("***********");
// find() methodu bir dizi elemanının koşula uymasını kontrol eder.
const findUser = users.find((user) => user.id == 2);
console.log(findUser);

// sort() methodu bir dizi elemanını sıralar.
const numbersss = [2, 5, 1, 4, 3];
numbersss.sort((a, b) => a - b);
console.log(numbersss);

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products)
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted

const fucNumber = [2,30,1,99,23]
console.log(fucNumber)
console.log(fucNumber.sort((a,b)=>a-b))

// isimleri siralama
const localName = ["tugberk","fatma","burcu","ayse"]
console.log(localName)
const llll = localName.sort((a,b) => a.localeCompare(b));
console.log(llll)