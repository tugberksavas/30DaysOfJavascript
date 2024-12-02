// 1. Toplam yıllık geliri hesapla
function toplamYillikGelirHesapla() {
  const maasAylik = 4000; // Aylık maaş
  const yillikBonus = 10000; // Yıllık bonus
  const onlineKursGeliriAylik = 5500; // Aylık online kurs geliri

  const toplamYillikGelir =
    (maasAylik + onlineKursGeliriAylik) * 12 + yillikBonus;
  console.log("1. Görev: Toplam Yıllık Gelir");
  console.log("Toplam Yıllık Gelir:", toplamYillikGelir + " Euro");
  console.log("-------------------------------");
}
// 2. Toplam yıllık geliri 18% vergi ile hesapla
function vergiHesapla() {
  const toplamYillikGelir = 70000; // Toplam yıllık gelir
  const vergiOrani = 0.18; // Vergi oranı
  const vergi = toplamYillikGelir * vergiOrani;
  console.log("2. Görev: Vergi Hesapla");
  console.log("Vergi:", vergi + " Euro");
  console.log("-------------------------------");
}

// 2. En uzak iki parçacık arasındaki mesafeyi hesapla
function enUzakMesafeyiBul() {
  const noktalar = [-12, -4, -3, -1, 0, 4, 8];
  const enKucukNokta = Math.min(...noktalar); // En küçük nokta
  const enBuyukNokta = Math.max(...noktalar); // En büyük nokta

  const mesafe = enBuyukNokta - enKucukNokta; // En uzak iki nokta arasındaki mesafe
  console.log("2. Görev: En Uzak İki Parçacık Arasındaki Mesafe");
  console.log("Noktalar:", noktalar);
  console.log("En küçük nokta:", enKucukNokta);
  console.log("En büyük nokta:", enBuyukNokta);
  console.log("Mesafe:", mesafe);
  console.log("-------------------------------");
}

// 3. Geçerli bir JavaScript değişken adını tanımlayan bir deseni kontrol et
function gecerliDegiskenKontrol(degisken) {
  const degiskenDeseni = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/; // Geçerli değişken deseni
  return degiskenDeseni.test(degisken);
}

// Değişken kontrolü için testler
function degiskenKontrolTestleri() {
  const testDegiskenleri = [
    "first_name", // true olmalı
    "first-name", // false olmalı
    "1first_name", // false olmalı
    "firstname", // true olmalı
  ];

  console.log("3. Görev: Geçerli JavaScript Değişken Adı Kontrolü");
  testDegiskenleri.forEach((degisken) => {
    const sonuc = gecerliDegiskenKontrol(degisken);
    console.log(`Değişken: '${degisken}' -> Geçerli mi? ${sonuc}`);
  });
  console.log("-------------------------------");
}

// Tüm fonksiyonları çağır
function calistir() {
  toplamYillikGelirHesapla();
  enUzakMesafeyiBul();
  degiskenKontrolTestleri();
}

calistir(); // Tüm fonksiyonları çağırma
