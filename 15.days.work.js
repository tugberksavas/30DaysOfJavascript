// Hayvanları temsil eden bir sınıf oluştur
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  // Hayvanı tanıtan bir metot
  describe() {
    return `Bu hayvanın ismi ${this.name}, yaşı ${this.age}, rengi ${this.color} ve ${this.legs} bacaklı.`;
  }
}

// Hayvan sınıfından Tır olarak bir alt sınıf (Köpek) oluştur
class Dog extends Animal {
  bark() {
    return "Hav hav!";
  }
}

// Hayvan sınıfından Tır olarak bir alt sınıf (Kedi) oluştur
class Cat extends Animal {
  meow() {
    return "Miyav miyav!";
  }
}

// Hayvan, Köpek ve Kedi sınıflarını kullan
const animal = new Animal("Hayvan", 5, "kahverengi", 4);
console.log(animal.describe());

const dog = new Dog("Karabaş", 3, "siyah", 4);
console.log(dog.describe());
console.log(dog.bark());

const cat = new Cat("Tekir", 2, "beyaz", 4);
console.log(cat.describe());
console.log(cat.meow());
