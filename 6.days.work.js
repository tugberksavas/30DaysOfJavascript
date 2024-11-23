const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

// // For loop
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// // While loop
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// // Do while loop
// let j = 0;
// do {
//   console.log(j);
//   j++;
// } while (j <= 10);

// console.log("***************");
// // For loop
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// // While loop
// let i = 10;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }

// // Do while loop
// let j = 10;
// do {
//   console.log(j);
//   j--;
// } while (j >= 0);
console.log("***************");

for (let i = 0; i < 7; i++) {
  console.log("#".repeat(i));
} // This will print 7 lines of "#" with 0,1,2,3
console.log("--------------------");
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}
console.log("--------------------");
for (let i = 0; i <= 10; i++) {
  console.log(`${i} ${i * i} ${i * i * i}`);
}
console.log("--------------------");
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log("2ye bolnen sayilar cift sayilar", i);
  }
}
console.log("--------------------");
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(`2ye bolunmeyen sayilar tek sayilar ${i}`);
  }
}
console.log("--------------------");
//0'dan 100'e kadar for döngüsü ile sadece asal sayıları yazdırın
for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log("asal sayilar", i);
  }
}
console.log("--------------------");
let toplam = 0;
for (let i = 0; i <= 100; i++) {
  toplam += i;
}
console.log("0-100 arasi sayilarin toplami :", toplam);
console.log("--------------------");
//5 rastgele sayıdan oluşan bir dizi oluşturacak küçük bir script yazın
let randomNumbers = [];
for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100));
}
console.log(randomNumbers);
console.log("--------------------");
//Altı karakterli rastgele bir ID oluşturacak bir script yazın (örneğin: 5j2khz)
let randomId = "";
const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
for (let i = 0; i < 6; i++) {
  randomId += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(randomId);
