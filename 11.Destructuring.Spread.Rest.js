//Destructuring --> seklini bozma
//Spread --> Dagilma ,yayma
//Rest --> Kalan

const numbers = [10, 12, 14];

const [number1, number2] = numbers; //Destructuring

console.log(numbers[0]); //10
console.log(number1); //10

console.log(numbers[1]); //12
console.log(number2); //12

console.log(numbers[2]); //index 2

console.log("***************");
const names = ["Asabeneh", "Brook", "David", "John"];
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);
console.log("***************");
const fullStack = [
  ["HTML", "CSS", ["Javascript", "React", "Svelte"]],
  ["Java", "C#", "MongoDB"],
];
const [[firstLangues, secondLangues, [firstThirdLangues]], backEnd] = fullStack;

console.log(firstLangues, secondLangues, firstThirdLangues);
console.log(backEnd);

console.log("***************");
const numbersAtlama = [1, 2, 3];
let [numOne, , numThree] = numbersAtlama; //2 is omitted

console.log(numOne, numThree);
console.log("**************");
const namesUndefined = [undefined, "Brook", "David"];
let [
  firstPersonUndefined = "Asabeneh",
  secondPersonUndefined,
  thirdPersonUndefined,
  fourthPersonUndefined = "John",
] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);
console.log("*************");
// Spread
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;

console.log(num1, num2, num3);
console.log(rest);
console.log("***********");
const namesss = ["tugberk", "tugce", "hilal", "bengu", "ayse", "tugrul"];
let [first, second, ...restt] = namesss;
console.log(first, second);
console.log(restt);
console.log("***********");

const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
  ["Turkey", "Ankara"],
];

for (const [country, city] of countries) {
  console.log(country, city);
}
for (const [country, city] of countries) {
  console.log(`Ulke: ${country}, Baskent: ${city}`);
}
console.log("***********");
const user = {
  name: "Tugberk",
  title: "Programmer",
  country: "Turkey",
  city: "Zonguldak",
  skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
  age: 30,
  isMarried: false,
};
const { name, title, country, city, skills, age, isMarried } = user;
console.log(name, title, country, city, skills, age, isMarried);
console.log(user);
console.log("*****************");
const user2 = {
  name: "Tugberk",
  title: "Programmer",
  country: "Turkey",
  city: "Zonguldak",
  skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
  age: 30,
  isMarried: false,
};
const { name: isim, age: yas } = user2;
console.log(isim, yas); // isim ve yas degiskenleri olusturuldu
console.log(user2); // user2 objesi degismedi
console.log("*****************");

function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(5, 10));

function multiplyArray(numbersArray) {
  return numbersArray[0] * numbersArray[1];
}
const numbersArrayGosterme = [10, 6];
console.log(multiplyArray(numbersArrayGosterme));
console.log("*****************");

const user3 = {
  name: "Tugberk",
  work: "developer",
  country: "Turkey",
  city: "Zonguldak",
  skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
  age: 28,
};

function kullanciGoster(user3) {
  return `Merhaba , ben ${user3.name}, ${user3.age} yasindayim, ${user3.country}/${user3.city} dogdum. ${user3.work}isini yapiyorum ${user3.skills} ile. `;
}

console.log(kullanciGoster(user3));
console.log("*************");

const sayiCogaltma = [1, 4, 6, 9];

const kopyaSayiCogalma = [...sayiCogaltma];

console.log(sayiCogaltma);
kopyaSayiCogalma.push(20);
console.log(sayiCogaltma);
console.log(kopyaSayiCogalma);
console.log("**********");
const userRefarans = {
  name: "Tugberk",
  work: "developer",
  country: "Turkey",
  city: "Zonguldak",
  skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
  age: 28,
};
const userRefaransKopyasi = { ...userRefarans };
userRefaransKopyasi.name = "Tugberk Savas";
console.log(userRefarans);
console.log(userRefaransKopyasi);
console.log("******************");

const son = [1, 3, 5];
console.log(0, ...son, 9);
