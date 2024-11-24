// Veriler
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

/*
  forEach, map, filter ve reduce arasındaki farklar:
  - forEach: Diziyi dolaşır, her bir eleman için belirtilen fonksiyonu çalıştırır. Yeni bir dizi dönmez.
  - map: Dizinin her bir elemanını dönüştürerek yeni bir dizi döner. Orijinal diziyi değiştirmez.
  - filter: Dizideki elemanları bir şarta göre filtreler ve bu şartı sağlayan elemanlardan yeni bir dizi oluşturur.
  - reduce: Diziyi bir değere indirger. Örneğin; toplam, çarpım, birleştirme gibi işlemler için kullanılır.
*/

// Callback fonksiyonu tanımlama
const elemaniYazdir = (eleman) => console.log("eleman:",eleman);

// forEach ile dizideki elemanları yazdırma
countries.forEach(elemaniYazdir); // Ülkeleri yazdır
console.log("--------");
names.forEach(elemaniYazdir); // İsimleri yazdır
console.log("--------");
numbers.forEach(elemaniYazdir); // Sayıları yazdır

// map ile diziyi dönüştürme
const ulkelerBuyukHarf = countries.map(country => country.toUpperCase());
console.log("bas harfi buyuk yapma",ulkelerBuyukHarf); // Tüm ülkeleri büyük harfe çevir

const ulkelerUzunluk = countries.map(country => country.length);
console.log("ulkelerin uzunluklari",ulkelerUzunluk); // Ülkelerin uzunluklarını al

const sayilarinKaresi = numbers.map(number => number ** 2);
console.log("her sayinin karesini alma ",sayilarinKaresi); // Her bir sayının karesini al

const isimlerBuyukHarf = names.map(name => name.toUpperCase());
console.log("isimleri buyuk harfe cevirme",isimlerBuyukHarf); // İsimleri büyük harfe çevir

const urunFiyatlari = products.map(product => product.price);
console.log("urunlerin fiyatlari",urunFiyatlari); // Ürünlerin fiyatlarını al

// filter ile elemanları filtreleme
const landIcerenUlkeler = countries.filter(country => country.includes('land'));
console.log("land iceren ulkeler ",landIcerenUlkeler); // "land" içeren ülkeler

const altiHarfliUlkeler = countries.filter(country => country.length === 6);
console.log("6 harfli ulkeler : " +altiHarfliUlkeler); // 6 harfli ülkeler

const altiVeyaDahaFazlaHarfliUlkeler = countries.filter(country => country.length >= 6);
console.log(altiVeyaDahaFazlaHarfliUlkeler); // 6 veya daha fazla harfli ülkeler

const EHarfiIleBaslamayanUlkeler = countries.filter(country => !country.startsWith('E'));
console.log("e harfiyle baslayan ulkeler",EHarfiIleBaslamayanUlkeler); // "E" harfi ile başlamayan ülkeler

const gecerliFiyatlar = products.filter(product => typeof product.price === 'number' && product.price > 0);
console.log("gecerli fiyatlar",gecerliFiyatlar); // Sadece geçerli fiyatlar

// Sadece string elemanları döndüren bir fonksiyon
function stringListeleriAl(dizi) {
  return dizi.filter(eleman => typeof eleman === 'string');
}
console.log(stringListeleriAl([...countries, 123, true, 'Merhaba'])); // Örnek kullanım

// reduce ile işlemler
const sayilarinToplami = numbers.reduce((toplam, sayi) => toplam + sayi, 0);
console.log(sayilarinToplami); // Sayıların toplamı

const ulkeCumlesi = countries.reduce((cümle, ulke, index) => {
  if (index === countries.length - 1) {
    return `${cümle} ve ${ulke} kuzey Avrupa ülkeleridir.`;
  } else {
    return `${cümle}, ${ulke}`;
  }
}, '');
console.log(ulkeCumlesi); // Tüm ülkeleri cümle halinde birleştir

/*
  some ve every farkı:
  - some: Dizideki en az bir eleman belirtilen şartı sağlıyorsa `true` döner.
  - every: Dizideki tüm elemanlar belirtilen şartı sağlıyorsa `true` döner.
*/

const isimlerYediHarf = names.some(name => name.length > 7);
console.log(isimlerYediHarf); // Bazı isimler 7 harften uzun mu?

const ulkelerLandKelimesi = countries.every(country => country.includes('land'));
console.log(ulkelerLandKelimesi); // Tüm ülkelerde "land" var mı?

/*
  find ve findIndex farkı:
  - find: Dizide belirtilen şartı sağlayan ilk elemanı döner.
  - findIndex: Dizide belirtilen şartı sağlayan ilk elemanın indeksini döner.
*/

const altiHarfliIlkUlke = countries.find(country => country.length === 6);
console.log(altiHarfliIlkUlke); // İlk 6 harfli ülke

const altiHarfliIlkUlkeIndex = countries.findIndex(country => country.length === 6);
console.log(altiHarfliIlkUlkeIndex); // İlk 6 harfli ülkenin indeksi

const norwayIndex = countries.findIndex(country => country === 'Norway');
console.log(norwayIndex); // "Norway" indeksini bul

const rusyaIndex = countries.findIndex(country => country === 'Russia');
console.log(rusyaIndex); // "Russia" indeksi yoksa -1
