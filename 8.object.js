// objects -- >> obje ve nesneler
// classes -- >> sınıflar
// scop -- >> kapsamlık

// Değişken programlamanın temel parçasıdır

ad = "Tugberk"; // window scope
age = 28;

function letsLearnScope() {
  console.log(ad, ":", age);
  if (true) {
    console.log(ad, ":", age);
  }
}
console.log(ad, ":", age); // accessible

letsLearnScope();

console.log("*************************");

// Global Scope

let a = "javascript";
let b = 10;

function globalScope(a, b) {
  console.log(a, b); // Javascript 10, accessible
  if (true) {
    let a = "python";
    let b = 100;
    console.log(a, b); // python 100, accessible
  }
  console.log(a, b); // Javascript 10, accessible
}
globalScope(a, b); // Javascript 10
console.log(a, b); // Javascript 10, accessible

console.log("******************");

let namee = "Tugberk";
let surname = "Savas";

function scopeExample(namee, surname) {
  console.log(namee, surname); // Tugberk Savas, accessible
  if (true) {
    let namee = "Tugce";
    let surname = "Savas Kaya";
    console.log(namee, surname); // Tugce Savas Kaya, accessible
  }
  console.log(namee, surname); // Tugberk Savas, accessible
}
scopeExample(namee, surname); // Tugberk Savas, accessible
console.log(namee, surname); // Tugberk Savas, accessible
console.log("--------------------");

// Object -- nesne
// nesne --> object

const bosNesne = {};
console.log(bosNesne); // {}

const person = {
  name: "Tugberk",
  //   surname: "Savas",
  age: 28,
  isMarried: false,
  country: "Turkey",
  "phone number": +905555555555,
  city: "Istanbul",
  test: {
    deneme: "Deneme Text",
  },
  skills: ["javascript", "python", "java"],
  sibllings: [{ name: "Tugce", surname: "Savas Kaya" }],
  getFullName: function () {
    return `${this.name} ${this.surname} Yas: ${this.age}`;
  },
};
console.log(person);
console.log(person.age);
console.log(person.isMarried ? "evli" : "bekar");
console.log(person.test.deneme);
console.log(person.skills);
console.log(person.skills[0]);
console.log(person.sibllings);
console.log(person.sibllings[0].name);
console.log(person["phone number"]);

console.log(person["phone number"].toString());
console.log(person["phone number"].toString().replace("+", ""));
console.log(
  person["phone number"].toString().replace("+", "").replace("0", "")
);
console.log(person.getFullName());
console.log(person.getFullName().toUpperCase());
console.log(person.getFullName().toLowerCase());
console.log(person.getFullName().split(" "));
console.log(person.getFullName().split(" ").join(" "));

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});

console.log(person.name);
person.name = "Abdullah";
console.log(person.name);
person.title = "Developer";
person.skills.push("c++", "React");
console.log(person.skills);
person.getPersonInfo = function () {
  let skillsWithoutLastOne = this.skills
    .splice(0, this.skills.length - 1)
    .join(",");
  let lastSkill = this.skills[this.skills.length - 1];
  console.log(skillsWithoutLastOne);
  console.log(lastSkill);
  let skills = `${skillsWithoutLastOne} and ${lastSkill}`;
  console.log(skills);
  let fullName = this.getFullName();
  let statement = `${fullName} is a ${this.title} .\nHe lives in ${this.city} \nHe has ${skills} skills.`;
  // console.log(statement);
  let formatSkills = formatter.format(this.skills);
  console.log(formatSkills);
  return statement;
  
  };
  console.log(person.getPersonInfo());
  console.log("---------------------------");

//Object Methods

let newUser = Object.assign({},person)
console.log(person);

newUser.name = "Murat"
console.log(newUser);
//turkce ye ceviren bir fonksiyon
console.log(Object.keys(person)); //obje anahtari
console.log(Object.values(person)); //obje degeri
console.log(Object.entries(person)); // obje anahtari ve degeri

for (let [key,val] of Object.entries(person)) {
  console.log(`Key - ${key} : Value - ${val}`);
  // console.log(key,val);
}

console.log(person.hasOwnProperty("country")); //obje country anahtari var mi


// https:developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
// https:developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
// https:developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal