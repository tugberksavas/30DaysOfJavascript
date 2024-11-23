// 1. 'challenge' adında bir değişken tanımlayın ve '30 Days Of JavaScript' değerini atayın
let challenge = '30 Days Of JavaScript';

// 2. Değişkenin değerini tarayıcı konsoluna yazdırın
console.log("2:", challenge);

// 3. Değişkenin uzunluğunu tarayıcı konsoluna yazdırın
console.log("3:", challenge.length);

// 4. Metindeki tüm karakterleri büyük harfe çevirin
console.log("4:", challenge.toUpperCase());

// 5. Metindeki tüm karakterleri küçük harfe çevirin
console.log("5:", challenge.toLowerCase());

// 6. Metnin ilk kelimesini (örneğin '30') kesin
console.log("6:", challenge.substring(0, 2)); // Çıktı: '30'

// 7. 'Days Of JavaScript' kısmını metinden çıkarın
console.log("7:", challenge.substring(3)); // Çıktı: 'Days Of JavaScript'

// 8. Metin içinde 'Script' kelimesi geçiyor mu, kontrol edin
console.log("8:", challenge.includes('Script')); // Çıktı: true

// 9. Metni bir diziye dönüştürün
console.log("9:", challenge.split()); // Çıktı: ['30 Days Of JavaScript']

// 10. Metni boşluklardan ayırarak bir diziye dönüştürün
console.log("10:", challenge.split(' ')); // Çıktı: ['30', 'Days', 'Of', 'JavaScript']

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' metnini virgüllerden ayırarak bir diziye dönüştürün
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log("11:", companies.split(', ')); 
// Çıktı: ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 12. '30 Days Of JavaScript' metnini '30 Days Of Python' ile değiştirin
console.log("12:", challenge.replace('JavaScript', 'Python')); // Çıktı: '30 Days Of Python'

// 13. '30 Days Of JavaScript' stringinde 15. indeksteki karakteri bulun
console.log("13:", challenge.charAt(15)); // Çıktı: 'S'

// 14. '30 Days Of JavaScript' stringinde 'J' harfinin karakter kodunu bulun
console.log("14:", challenge.charCodeAt(11)); // Çıktı: 74

// 15. İlk 'a' harfinin konumunu bulun
console.log("15:", challenge.indexOf('a')); // Çıktı: 3

// 16. Son 'a' harfinin konumunu bulun
console.log("16:", challenge.lastIndexOf('a')); // Çıktı: 14

// 17. 'because' kelimesinin ilk geçtiği yeri bulun
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log("17:", sentence.indexOf('because')); // Çıktı: 31

// 18. 'because' kelimesinin son geçtiği yeri bulun
console.log("18:", sentence.lastIndexOf('because')); // Çıktı: 47

// 19. 'because' kelimesinin ilk geçtiği yeri search() ile bulun
console.log("19:", sentence.search('because')); // Çıktı: 31

// 20. Stringin başındaki ve sonundaki boşlukları kaldırın
let trimmed = ' 30 Days Of JavaScript ';
console.log("20:", trimmed.trim()); // Çıktı: '30 Days Of JavaScript'

// 21. Stringin '30' ile başlayıp başlamadığını kontrol edin
console.log("21:", challenge.startsWith('30')); // Çıktı: true

// 22. Stringin 'JavaScript' ile bitip bitmediğini kontrol edin
console.log("22:", challenge.endsWith('JavaScript')); // Çıktı: true

// 23. Stringdeki tüm 'a' harflerini bulun
console.log("23:", challenge.match(/a/g)); // Çıktı: ['a', 'a', 'a']

// 24. '30 Days of' ve 'JavaScript' stringlerini birleştirin
let part1 = '30 Days Of';
let part2 = ' JavaScript';
console.log("24:", part1.concat(part2)); // Çıktı: '30 Days Of JavaScript'

// 25. Stringi 2 kez yazdırmak için repeat() metodunu kullanın
console.log("25:", challenge.repeat(2)); 
// Çıktı: '30 Days Of JavaScript30 Days Of JavaScript'
