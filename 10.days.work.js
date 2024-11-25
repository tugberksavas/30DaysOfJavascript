// 1. Boş bir set oluştur
const emptySet = new Set();
console.log("Boş Set:", emptySet);

// 2. 0'dan 10'a kadar olan sayılarla bir set oluştur
const numbersSet = new Set();
for (let i = 0; i <= 10; i++) {
    numbersSet.add(i);
}
console.log("0'dan 10'a kadar set:", numbersSet);

// 3. Set'ten bir eleman çıkar
numbersSet.delete(5);
console.log("5 çıkarıldıktan sonra set:", numbersSet);

// 4. Set'i temizle
numbersSet.clear();
console.log("Set temizlendi:", numbersSet);

// 5. Bir array'den 5 string elemanıyla set oluştur
const stringArray = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
const stringSet = new Set(stringArray);
console.log("String Set:", stringSet);

// 6. Ülkelerin adlarını ve harf sayılarını içeren bir map oluştur
const countries = ['Finland', 'Sweden', 'Norway'];
const countryMap = new Map();

countries.forEach(country => {
    countryMap.set(country, country.length);
});
console.log("Ülkeler ve harf sayıları Map:", countryMap);

// Map'in elemanlarını yazdır
for (let [country, charCount] of countryMap) {
    console.log(`${country}: ${charCount} harf`);
}
