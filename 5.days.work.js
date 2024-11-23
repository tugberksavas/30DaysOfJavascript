// 1. Boş bir dizi tanımla
let emptyArray = [];
console.log("Soru 1:", emptyArray);

// 2. 5'ten fazla eleman içeren bir dizi tanımla
let numberArray = [1, 2, 3, 4, 5, 6, 7];
console.log("Soru 2:", numberArray);

// 3. Dizinin uzunluğunu bul
console.log("Soru 3:", numberArray.length);  // Çıktı: 7

// 4. Dizinin ilk, orta ve son elemanını al
let firstItem = numberArray[0]; // İlk eleman: 1
let middleItem = numberArray[Math.floor(numberArray.length / 2)]; // Orta eleman: 4
let lastItem = numberArray[numberArray.length - 1]; // Son eleman: 7
console.log("Soru 4: İlk, orta ve son elemanlar:", firstItem, middleItem, lastItem);

// 5. Farklı veri türlerini içeren bir dizi tanımla
let mixedDataTypes = [1, "merhaba", true, null, undefined, { name: "tugberk" }];
console.log("Soru 5:", mixedDataTypes.length);  // Çıktı: 6

// 6. itCompanies adında bir dizi tanımla ve ilk değerleri at
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log("Soru 6:", itCompanies);

// 7. Diziyi console.log() ile yazdır
console.log("Soru 7:", itCompanies);

// 8. Dizideki şirket sayısını yazdır
console.log("Soru 8:", itCompanies.length); // Çıktı: 7

// 9. İlk, orta ve son şirketi yazdır
let firstCompany = itCompanies[0];  // Facebook
let middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];  // Apple
let lastCompany = itCompanies[itCompanies.length - 1];  // Amazon
console.log("Soru 9: İlk, orta ve son şirketler:", firstCompany, middleCompany, lastCompany);

// 10. Her bir şirketi yazdır
console.log("Soru 10: Şirketler:");
itCompanies.forEach(company => console.log(company));

// 11. Her şirketin ismini büyük harfe çevir ve yazdır
console.log("Soru 11: Büyük harfe çevrilen şirketler:");
itCompanies.forEach(company => console.log(company.toUpperCase()));

// 12. Diziyi bir cümle gibi yazdır
console.log("Soru 12:", itCompanies.join(", ") + " büyük IT şirketleridir.");

// 13. Eğer belirli bir şirket itCompanies dizisinde varsa, şirketin adını döndür, yoksa "Şirket bulunamadı" mesajını döndür
let searchCompany = "Savas Ticaret";
if (itCompanies.includes(searchCompany)) {
  console.log("Soru 13:", searchCompany + " dizide var.");
} else {
  console.log("Soru 13:", searchCompany + " şirketi bulunamadı.");
}

// 14. "o" harfi birden fazla olan şirketleri filtrelemeden bul
console.log("Soru 14: Birden fazla 'o' harfi içeren şirketler:");
itCompanies.forEach(company => {
  let count = (company.match(/o/g) || []).length;
  if (count > 1) {
    console.log(company);
  }
});

// 15. Diziyi sıralamak için sort() metodunu kullan
console.log("Soru 15: Sıralanmış şirketler:");
itCompanies.sort();
console.log(itCompanies);

// 16. Diziyi tersten sıralamak için reverse() metodunu kullan
console.log("Soru 16: Tersten sıralanmış şirketler:");
itCompanies.reverse();
console.log(itCompanies);

// 17. Dizinin ilk 3 elemanını slice() metoduyla al
let firstThreeCompanies = itCompanies.slice(0, 3);
console.log("Soru 17: İlk 3 şirket:", firstThreeCompanies);

// 18. Dizinin son 3 elemanını slice() metoduyla al
let lastThreeCompanies = itCompanies.slice(-3);
console.log("Soru 18: Son 3 şirket:", lastThreeCompanies);

// 19. Dizinin ortadaki şirket veya şirketleri slice() metoduyla al
let middleCompanies = itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2) + 1);
console.log("Soru 19: Ortadaki şirket:", middleCompanies);

// 20. Dizinin ilk şirketini sil
itCompanies.shift();
console.log("Soru 20: İlk şirket silindikten sonra:", itCompanies);

// 21. Dizinin ortadaki şirket veya şirketleri sil
let middleIndex = Math.floor(itCompanies.length / 2);
itCompanies.splice(middleIndex, 1);
console.log("Soru 21: Ortadaki şirket silindikten sonra:", itCompanies);

// 22. Dizinin son şirketini sil
itCompanies.pop();
console.log("Soru 22: Son şirket silindikten sonra:", itCompanies);

// 23. Tüm IT şirketlerini sil
itCompanies = [];
console.log("Soru 23: Tüm şirketler silindikten sonra:", itCompanies);
