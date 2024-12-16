// Ülke listesini tanımlayan bir dizi
const countriesArray = ["Turkey", "Germany", "France", "Italy", "Spain"];

// Ülke ve başkentlerini tanımlayan bir nesne
const countriesObject = {
  Turkey: "Ankara",
  Germany: "Berlin",
  France: "Paris",
  Italy: "Rome",
  Spain: "Madrid",
};

// Ülke dizisini tablo olarak göster
console.log("Ülkeler Dizisi (Tablo Olarak):");
console.table(countriesArray);

// Ülke nesnesini tablo olarak göster
console.log("Ülkeler Nesnesi (Tablo Olarak):");
console.table(countriesObject);

// console.group() kullanarak logları grupla
console.group("Gruplanmış Loglar");
console.log("Bu, grup içerisindeki bir log mesajıdır.");
console.log("Ülkeler dizisi:", countriesArray);
console.log("Ülkeler nesnesi:", countriesObject);
console.groupEnd(); // Gruplanmış logların sonu
