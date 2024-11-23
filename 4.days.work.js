// let yas = prompt("enter you age", "yasini gir");
// yas = Number(yas);

// if (yas >= 18) {
//   console.log(`${ehliyet} ehliyet alabilirsin`);
// } else {
//   let kalanYil = 18 - yas;
//   console.log(`Araba sürebilmek için ${kalanYil} yılınız kaldı`);
// }

console.log("************");

// let myAge = 28;
// let yourAge = prompt("yas girin")
// yourAge = Number(yourAge)

// if(myAge>yourAge){
//     console.log(`Girilen sayi:${yourAge} - Ben senden ${myAge-yourAge} buyugum`);
// }else if(yourAge>myAge){
//     console.log(`Girilen sayi:${yourAge} - Sen benden ${yourAge-myAge} buyuksun`);
// }else if (myAge==yourAge){
//     console.log(`Girilen sayi:${yourAge} - Ben ve sen aynı yaşdayız`);
// }else{
//     console.log(`bos`);
// }

console.log("***********");

let a = 3;
let b = 3;

if (a > b) {
  console.log(`${a} sayisi ${b} sayisindan buyuktur`);
} else if (a < b) {
  console.log(`${a} sayisi ${b} sayisindan kucuktur`);
} else {
  console.log(`${a} sayisi ${b} sayisindan esittir`);
}

//ternary operator
let c = 1;
let d = 4;
let result =
  c > d
    ? `${c} sayisi ${d} sayisindan buyuktur`
    : `${c} sayisi ${d} sayisindan kucuktur`;
console.log(result);

console.log("*****************");

// let sayi = prompt("sayi giriniz");
// sayi = Number(sayi);
// if (sayi % 2 == 0) {
//   console.log(`${sayi} sayisi cift sayidir`);
// } else console.log(`${sayi} sayisi cift sayi degildir`);
// //ternary operator
// let result2 =
//   sayi % 2 == 0
//     ? `${sayi} sayisi cift sayidir`
//     : `${sayi} sayisi cift sayi degildir`;
// console.log(result2);
// //switch case
// let gunler = prompt("gunu giriniz");
// gunler = gunler.toLowerCase();
// switch (gunler) {
//   case "pazartesi":
//     console.log("pazartesi gunu");
//     break;
//   case "sali":
//     console.log("sali gunu");
//     break;
//   case "carsamba":
//     console.log("carsamba gunu");
//     break;
//   case "persembe":
//     console.log("persembe gunu");
//     break;
//   case "cuma":
//     console.log("cuma gunu");
//     break;
//   case "cumartesi":
//     console.log("cumartesi gunu");
//     break;
//   case "pazar":
//     console.log("pazar gunu");
//     break;
//   default:
//     console.log("gecerli gun giriniz");
// }

// 2. LEVEL

// Görev 1: Notları puanlara göre atayın
// let puan = prompt("Öğrencinin puanını giriniz:");
// puan = Number(puan);

// if (puan >= 80 && puan <= 100) {
//   console.log("Not: A");
// } else if (puan >= 70 && puan <= 89) {
//   console.log("Not: B");
// } else if (puan >= 60 && puan <= 69) {
//   console.log("Not: C");
// } else if (puan >= 50 && puan <= 59) {
//   console.log("Not: D");
// } else if (puan >= 0 && puan < 50) {
//   console.log("Not: F");
// } else {
//   console.log("Geçersiz puan! Lütfen 0 ile 100 arasında bir değer giriniz.");
// }

console.log("********************");

// Görev 2: Ay'a göre mevsimi belirleyin
// let ay = prompt("Bir ay giriniz:").toLowerCase();

// if (ay === "eylül" || ay === "ekim" || ay === "kasım") {
//   console.log("Mevsim: Sonbahar");
// } else if (ay === "aralık" || ay === "ocak" || ay === "şubat") {
//   console.log("Mevsim: Kış");
// } else if (ay === "mart" || ay === "nisan" || ay === "mayıs") {
//   console.log("Mevsim: İlkbahar");
// } else if (ay === "haziran" || ay === "temmuz" || ay === "ağustos") {
//   console.log("Mevsim: Yaz");
// } else {
//   console.log("Geçerli bir ay giriniz!");
// }

console.log("********************");

// Görev 3: Günün hafta sonu veya iş günü olup olmadığını kontrol edin
// let gun = prompt("Bugün günlerden ne?").toLowerCase();

// if (gun === "cumartesi" || gun === "pazar") {
//   console.log(`${gun.charAt(0).toUpperCase() + gun.slice(1)} bir hafta sonu.`);
// } else if (
//   gun === "pazartesi" ||
//   gun === "sali" ||
//   gun === "çarşamba" ||
//   gun === "perşembe" ||
//   gun === "cuma"
// ) {
//   console.log(`${gun.charAt(0).toUpperCase() + gun.slice(1)} bir iş günü.`);
// } else {
//   console.log("Geçerli bir gün giriniz!");
// }

console.log("***********");

let kelime = prompt("bir seyler yazin");
if (kelime.length > 10) {
  console.log("girilen kelime uzun");
} else console.log("girilen kelime kisa"); // Bu kod bloğu çalışmaz

let ilkHarfBuyuk = kelime.charAt(0).toUpperCase()+kelime.slice(1).toLowerCase();
console.log(ilkHarfBuyuk);

let sonHarfBuyuk = kelime.slice(0, -1).toLowerCase()+kelime.slice(-1).toUpperCase();
console.log(sonHarfBuyuk); 

let ikinciHarfBuyuk = kelime.slice(0, 2).toLowerCase()+kelime.slice(2).toUpperCase();
console.log(ikinciHarfBuyuk);

let ilkHarfKucuk = kelime.charAt(0).toLowerCase()+kelime.slice(1)
console.log(ilkHarfKucuk);
