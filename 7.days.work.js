// Tam adınızı ekrana yazdıran bir fonksiyon
function fullName() {
  console.log("Tuğberk Savas");
}
fullName();

// İsmi ve soyadı parametre olarak alıp tam adı döndüren bir fonksiyon
function fullNameWithParams(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(fullNameWithParams("Tuğberk", "Savas"));

// İki sayıyı toplama fonksiyonu
function addNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addNumbers(5, 10));

// Dikdörtgenin alanını hesaplayan bir fonksiyon
function areaOfRectangle(length, width) {
  return length * width;
}
console.log(areaOfRectangle(5, 10));

// Dikdörtgenin çevresini hesaplayan bir fonksiyon
function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}
console.log(perimeterOfRectangle(5, 10));

// Dikdörtgen prizmanın hacmini hesaplayan bir fonksiyon
function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}
console.log(volumeOfRectPrism(5, 10, 15));

// Dairenin alanını hesaplayan bir fonksiyon
function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}
console.log(areaOfCircle(7));

// Dairenin çevresini hesaplayan bir fonksiyon
function circumOfCircle(radius) {
  return 2 * Math.PI * radius;
}
console.log(circumOfCircle(7));

// Yoğunluğu hesaplayan bir fonksiyon
function calculateDensity(mass, volume) {
  return mass / volume;
}
console.log(calculateDensity(10, 2));

// Hızı hesaplayan bir fonksiyon
function calculateSpeed(distance, time) {
  return distance / time;
}
console.log(calculateSpeed(100, 2));

// Ağırlığı hesaplayan bir fonksiyon
function calculateWeight(mass, gravity = 9.81) {
  return mass * gravity;
}
console.log(calculateWeight(50));

// Celsius'u Fahrenheit'e çeviren bir fonksiyon
function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(convertCelsiusToFahrenheit(30));

// BMI hesaplayan ve kategori döndüren bir fonksiyon
function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  if (bmi < 18.5) return "Zayıf";
  else if (bmi >= 18.5 && bmi <= 24.9) return "Normal";
  else if (bmi >= 25 && bmi <= 29.9) return "Fazla Kilolu";
  else return "Obez";
}
console.log(calculateBMI(100, 1.89));

// Ay bilgisine göre mevsimi döndüren bir fonksiyon
function checkSeason(month) {
  const lowerCaseMonth = month.toLowerCase();
  if (["eylül", "ekim", "kasım"].includes(lowerCaseMonth)) {
    return "Sonbahar";
  } else if (["aralık", "ocak", "şubat"].includes(lowerCaseMonth)) {
    return "Kış";
  } else if (["mart", "nisan", "mayıs"].includes(lowerCaseMonth)) {
    return "İlkbahar";
  } else if (["haziran", "temmuz", "ağustos"].includes(lowerCaseMonth)) {
    return "Yaz";
  } else {
    return "Geçersiz ay";
  }
}
console.log(checkSeason("ocak"));

// Math.max kullanmadan maksimumu bulan bir fonksiyon
function findMax(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}
console.log(findMax(0, 10, 5)); // 10
console.log(findMax(-110, -10, -2)); // 0
