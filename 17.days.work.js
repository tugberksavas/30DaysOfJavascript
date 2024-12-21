// Bilgileri localStorage'a kaydediyoruz
localStorage.setItem("firstName", "Tuğberk");
localStorage.setItem("lastName", "Soyadınız");
localStorage.setItem("age", "25"); // Yaşınızı buraya yazabilirsiniz
localStorage.setItem("country", "Türkiye");
localStorage.setItem("city", "İstanbul");

// localStorage'dan bilgileri alıp console.log ile yazdırıyoruz
console.log("Ad:", localStorage.getItem("firstName"));
console.log("Soyad:", localStorage.getItem("lastName"));
console.log("Yaş:", localStorage.getItem("age"));
console.log("Ülke:", localStorage.getItem("country"));
console.log("Şehir:", localStorage.getItem("city"));
