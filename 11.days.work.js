// Verilen veriler
const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  { name: "Brook", scores: 75, skills: ["HTM", "CSS", "JS"], age: 16 },
  { name: "Alex", scores: 80, skills: ["HTM", "CSS", "JS"], age: 18 },
  { name: "David", scores: 75, skills: ["HTM", "CSS"], age: 22 },
  { name: "John", scores: 85, skills: ["HTML"], age: 25 },
  { name: "Sara", scores: 95, skills: ["HTM", "CSS", "JS"], age: 26 },
  { name: "Martha", scores: 80, skills: ["HTM", "CSS", "JS"], age: 18 },
  { name: "Thomas", scores: 90, skills: ["HTM", "CSS", "JS"], age: 20 },
];

// constants dizisini ayrıştırma
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log("constants dizisi ayrıştırması:");
console.log("e:", e);
console.log("pi:", pi);
console.log("gravity:", gravity);
console.log("humanBodyTemp:", humanBodyTemp);
console.log("waterBoilingTemp:", waterBoilingTemp);

// countries dizisini ayrıştırma
const [fin, est, sw, den, nor] = countries;
console.log("\nÜlkeler dizisi ayrıştırması:");
console.log("Finlandiya:", fin);
console.log("Estonya:", est);
console.log("İsveç:", sw);
console.log("Danimarka:", den);
console.log("Norveç:", nor);

// rectangle objesini ayrıştırma
const { width, height, area, perimeter } = rectangle;
console.log("\nDikdörtgen objesi ayrıştırması:");
console.log("Genişlik:", width);
console.log("Yükseklik:", height);
console.log("Alan:", area);
console.log("Çevre:", perimeter);
