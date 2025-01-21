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
/*class pet {
  constructor([_petName, _ownerName, _species, _breed]) {
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
pet2.padrone(pet1);*/

const form = document.querySelector("#objectForm");
const lista = document.querySelector("ul");
const array = [];
form.addEventListener("submit", function (event) {
  event.preventDefault();

  class petObj {
    constructor(_petName, _ownerName, _species, _breed) {
      this.petName = _petName;
      this.ownerName = _ownerName;
      this.species = _species;
      this.breed = _breed;
    }
  }

  function listOwner() {
    const pet = document.querySelector("#petName");
    const owner = document.querySelector("#ownerName");
    const species = document.querySelector("#species");
    const breed = document.querySelector("#breed");
    const pet2 = new petObj(pet.value, owner.value, species.value, breed.value);
    const lista = document.querySelector("#list");
    array.push(pet2);
    console.log(array);
    for (let index = 1; index < array.length; index++) {
      array.forEach((element) => {
        if (element.ownerName === array[index].ownerName) {
          console.log(true);
        } else {
          console.log(false);
        }
      });
    }

    const lista1 = document.createElement("li");
    lista1.textContent = "Pet Name :" + pet2.petName + " " + "Owner Name : " + pet2.ownerName + " " + "Species: " + pet2.species + " " + "Breed: " + pet2.breed;
    lista.appendChild(lista1);

    form.reset();
  }
  listOwner();
});
