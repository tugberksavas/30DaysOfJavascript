// Soru 1: Değişken tanımlama ve typeof ile veri türlerini kontrol etme
let firstName = "Tuğberk";
let lastName = "Savaş";
let country = "Türkiye";
let city = "İstanbul";
let age = 28;
let isMarried = false;
let year = 2024;

console.log("1:", typeof firstName); // string
console.log("2:", typeof lastName); // string
console.log("3:", typeof country); // string
console.log("4:", typeof city); // string
console.log("5:", typeof age); // number
console.log("6:", typeof isMarried); // boolean
console.log("7:", typeof year); // number

// Soru 2: '10' ile 10 aynı mı kontrol et
console.log("8:", typeof '10' === typeof 10); // false

// Soru 3: parseInt('9.8') ile 10 aynı mı kontrol et
console.log("9:", parseInt('9.8') === 10); // false

// Soru 4: Truthy ve Falsy ifadeler
console.log("10:", 1);          // truthy
console.log("11:", "hello");    // truthy
console.log("12:", true);       // truthy
console.log("13:", 0);          // falsy
console.log("14:", "");         // falsy
console.log("15:", null);       // falsy

// Soru 5: Karşılaştırma ifadeleri
console.log("16:", 4 > 3);       // true
console.log("17:", 4 >= 3);      // true
console.log("18:", 4 < 3);       // false
console.log("19:", 4 <= 3);      // false
console.log("20:", 4 == 4);      // true
console.log("21:", 4 === 4);     // true
console.log("22:", 4 != 4);      // false
console.log("23:", 4 !== 4);     // false
console.log("24:", 4 != '4');    // false
console.log("25:", 4 == '4');    // true
console.log("26:", 4 === '4');   // false

// Soru 6: Python ve Jargon uzunluk karşılaştırması
let python = "python";
let jargon = "jargon";
console.log("27:", python.length !== jargon.length); // false

// Soru 7: Mantıksal ifadeler
console.log("28:", 4 > 3 && 10 < 12);   // true
console.log("29:", 4 > 3 && 10 > 12);   // false
console.log("30:", 4 > 3 || 10 < 12);   // true
console.log("31:", 4 > 3 || 10 > 12);   // true
console.log("32:", !(4 > 3));           // false
console.log("33:", !(4 < 3));           // true
console.log("34:", !(false));           // true
console.log("35:", !(4 > 3 && 10 < 12)); // false
console.log("36:", !(4 > 3 && 10 > 12)); // true
console.log("37:", !(4 === '4'));       // true

// Soru 8: Dragon ve Python'da 'on' olup olmadığını kontrol etme
let dragon = "dragon";
console.log("38:", dragon.includes('on') && python.includes('on')); // true

// Soru 9: Date ile işlemler
let now = new Date();
console.log("39:", now.getFullYear());       // Yıl
console.log("40:", now.getMonth() + 1);      // Ay (0-11 olduğu için +1 ekliyoruz)
console.log("41:", now.getDate());           // Gün
console.log("42:", now.getDay());            // Haftanın günü (0=Pazar, 6=Cumartesi)
console.log("43:", now.getHours());          // Saat
console.log("44:", now.getMinutes());        // Dakika
console.log("45:", Math.floor(now.getTime() / 1000)); // 1 Ocak 1970'ten itibaren geçen saniye
