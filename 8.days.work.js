// 1. Boş bir obje oluşturun
let dog = {};

// 2. Objenin boş halini konsola yazdırın
console.log(dog); // {}

// 3. Özellikler ekleyin
dog.name = "Max";          // Köpeğin adı
dog.legs = 4;                // Bacak sayısı
dog.color = "Altin Sarisi";         // Rengi
dog.age = 3;                 // Yaşı
dog.bark = function() {      // Havlama metodu
    return "hav hav";
};

// 4. Objedeki değerleri alın ve konsola yazdırın
console.log(dog.name);       // Buddy
console.log(dog.legs);       // 4
console.log(dog.color);      // Brown
console.log(dog.age);        // 3
console.log(dog.bark());     // woof woof

// 5. Yeni özellikler ekleyin
dog.breed = "Golden Retriever"; // Köpek cinsi
dog.getDogInfo = function() {   // Köpek bilgisi metodu
    return `Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Breed: ${this.breed}`;
};

// Yeni özellikleri test edin
console.log(dog.breed);           // Golden Retriever
console.log(dog.getDogInfo());    // Name: Buddy, Age: 3, Color: Brown, Breed: Golden Retriever
