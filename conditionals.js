// IF else -> If else yapısı içerisinde koşulun sağlandığı kodlar if içerisinde yer alırken, koşulun sağlanmadığı kodlar ise else içerisinde yer alır.

// if -> koşulun sağlanması durumunda çalışacak kodlar

let num = 3;
if (num > 0) {
  console.log(`${num} sayısı 0'den büyüktür.`);
}

let isRaining = true;
if (isRaining) {
  // koşul sağlandığında çalışacak kodlar
  console.log("Yağmur var.");
}

// else -> koşulun sağlanmaması durumunda çalışacak kodlar
// if else -> koşulun sağlanması veya sağlanmaması durumunda çalışacak kodlar

let num2 = 3;
if (num2 > 5) {
  console.log(`${num2} sayısı 0'den büyüktür.`);
} else {
  console.log(`${num2} sayısı 0'dan küçüktür.`);
}

// let result = prompt("2+5 kac yapar ?","2+5")
// if (result == "7"){
//     console.log(`${result} dogru cevaptır`)
// }else{
//     console.log(`${result} yanlis cevaptır`)
// }

console.log("************");
// if else if -> koşulun sağlanmaması durumunda başka bir koşulun sağlanması durumunda çalış
let num3 = 5;
if (num3 == 4) {
  console.log(`${num3} num3 4'e eşittir.`);
} else if (num3 >= 5) {
  console.log(`${num3} num3 5'ten büyüktür.`);
} else if (num3 > 5) {
  console.log(`${num3} num3 5'e eşittir veya 5'ten büyüktür.`);
} else {
  console.log(`${num3} num3 4'ten küçüktür.`);
}

// let weather = prompt("hava durumunu sec","yagmurlu,ruzgarli,gunesli")
// if (weather == "yagmurlu") {
//   console.log(`${weather} : senin bir yagmurluga ihtiyacin var`);
// } else if (weather == "ruzgarli") {
//   console.log("soguk olabilir, bir cekete ihtiyacin olabilir");
// } else if (weather == "gunesli") {
//   console.log("gunesli bir gun, bir cekete ihtiyacın yok");
// } else {
//   console.log("yanlis secim 3 secenekten birini sec");
// }

// switch case -> koşulun sağlanmaması durumunda başka bir koşulun sağlanması durumunda çalış
console.log("**************************");
// let num4 = prompt("sayi giriniz");
// switch (num4) {
//   case 4:
//     console.log(`${num4} num4 4'e eşittir.`);
//     break;
//   case 5:
//     console.log(`${num4} num4 5'e eşittir.`);
//     break;
//   default:
//     console.log(`${num4} yanlis secim 4 veya 5 secenekten birini sec`);
//     break;
// }

let num5 = 8;
switch (num5) {
  case 7:
    console.log(`${num5} dogru cevap - switch`);
    break;
  case 8:
    console.log(`${num5} dogru cevap - switch`);
    break;
  default:
    console.log(`${num5} yanlis secim 7 veya 8 secenekten birini sec`);
}

let num7 = prompt("Enter number");
switch (true) {
  case num7 > 0:
    console.log("Number is positive");
    break;
  case num7 == 0:
    console.log("Numbers is zero");
    break;
  case num7 < 0:
    console.log("Number is negative");
    break;
  default:
    console.log("Entered value was not a number");
}

// switch case default -> koşulun sağlanmaması durumunda default olarak çalışacak kodlar
// switch case default if else -> koşulun sağlanmaması durumunda default olarak çalışacak kodlar
