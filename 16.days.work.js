// Veriler
const skills = ["HTML", "CSS", "JavaScript", "React"];
const age = 25;
const isMarried = false;
const student = {
  firstName: "Tuğberk",
  lastName: "Öğrenci",
  age: 25,
  isMarried: false,
  skills: ["HTML", "CSS", "JavaScript", "React"],
};

// JSON.stringify() ile formatlama
const skillsJSON = JSON.stringify(skills);
const ageJSON = JSON.stringify(age);
const isMarriedJSON = JSON.stringify(isMarried);
const studentJSON = JSON.stringify(student);

// Sonuçları konsola yazdırma
console.log("Skills JSON:", skillsJSON);
console.log("Age JSON:", ageJSON);
console.log("Is Married JSON:", isMarriedJSON);
console.log("Student JSON:", studentJSON);
