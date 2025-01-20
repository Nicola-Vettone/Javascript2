//Esercizio 1
class User {
  constructor(_firstNmae, _lastName, _age, _location) {
    this.name = _firstNmae;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  confronto(otherUser) {
    if (this.age > otherUser.age) {
      console.log(this.name + " è più vecchio di " + otherUser.name);
    } else if (this.age < otherUser.age) {
      {
        console.log(this.name + " è più giovane di " + otherUser.name);
      }
    } else {
      console.log(this.name + " e " + otherUser.name + " hanno la stessa età");
    }
  }
}

const marco = new User("Marco", "Rossi", "25", "Napoli");
const giorgio = new User("Giorgio", "Rossi", "25", "Napoli");
marco.confronto(giorgio);
giorgio.confronto(marco);
//Esercizio 2
class pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  padrone(otherPet) {
    if (this.ownerName === otherPet.ownerName) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
const pet1 = new pet("Billy", "Giorgio", "cane", "labrador");
const pet2 = new pet("Bob", "Giorgio", "gatto", "persiano");
pet1.padrone(pet2);
pet2.padrone(pet1);
