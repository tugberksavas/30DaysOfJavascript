// kosul ? true : false

let isRaining = false;

isRaining ? console.log("It is raining") : console.log("It is not raining");
// It is raining
isRaining = true;

let denemee = 5 > 3 ? "evet bes buyuktur 4 ten" : "hayir yanlis";
// evet bes buyuktur 4 ten
console.log(denemee);

// window methods
// window.location.href = "https://www.google.com"

// alert(massage)

// alert("welcome to 30 daysof Javascript")

// prompt() -> input alir
// let denemeee = prompt("sayi girin","sayi yalnizca pozitif olmali")
// console.log(denemeee)

// confirm() -> true ya da false dondurur
// let agree = confirm("Are you sure you want to delete this item?")
// console.log(agree)
// console.log(
//     agree ? "silme islemi basarili " : "silme islemi iptal edildi"
// );

// console.log(window.location.href)

// DATE OBJECT -> tarih ve saat

let date = new Date();
console.log(date);
console.log(date.getFullYear()); // yil
console.log(date.getMonth()); // ay
console.log(date.getDate()); // gun
console.log(date.getHours()); // saat
console.log(date.getMinutes()); // dakika
console.log(date.getSeconds()); // saniye
console.log(date.getMilliseconds()); // milisaniye

let now = new Date();
const year = now.getFullYear(),
  month = now.getMonth() + 1,
  day = now.getDate(),
  hour = now.getHours(),
  minute = now.getMinutes(),
  second = now.getSeconds(),
  millisecond = now.getMilliseconds(),
  dayNumber = date.getDay();
console.log(
  `${day}-${month}-${year} ${hour}:${minute}:${second}:${millisecond}`
);

let months = [
  "ocak",
  "subat",
  "mart",
  "nisan",
  "mayis",
  "haziran",
  "temmuz",
  "agustos",
  "eylul",
  "ekim",
  "kasim",
  "aralik",
];
console.log("yilda kac ay var : ", months.length);

let days = [
  "pazar",
  "pazartesi",
  "sali",
  "carsamba",
  "persembe",
  "cuma",
  "cumartesi",
];
console.log("haftada kac gun var : ", days.length);

let humanReadableDate = `${day} ${months[month]} ${year}, ${days[dayNumber]}, ${hour}:${minute}:${second}:${millisecond} `;
console.log(humanReadableDate);
