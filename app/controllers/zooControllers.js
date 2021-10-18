import { Aardvark } from "../models/Aardvark.js"
import { Bear } from "../models/Aardvark.js"
import { Cheetah } from "../models/Aardvark.js"
import { Duck } from "../models/Aardvark.js"
import { Eagle } from "../models/Aardvark.js"
import { Fox } from "../models/Aardvark.js"
import { Gopher } from "../models/Aardvark.js"
import { Hyena } from "../models/Aardvark.js"
import { Iguana } from "../models/Aardvark.js"
import { Jaguar } from "../models/Aardvark.js"
import { Kangaroo } from "../models/Aardvark.js"
import { Lemur } from "../models/Aardvark.js"
import { Macaw } from "../models/Aardvark.js"
import { Narwhal } from "../models/Aardvark.js"
import { Orangutan } from "../models/Aardvark.js"
import { Pangolin } from "../models/Aardvark.js"
import { Quetzal } from "../models/Aardvark.js"
import { Raccoon } from "../models/Aardvark.js"
import { Salamander } from "../models/Aardvark.js"
import { Tortoise } from "../models/Aardvark.js"
import { Unau } from "../models/Aardvark.js"
import { Vaquita } from "../models/Aardvark.js"
import { Whale } from "../models/Aardvark.js"
import { Xeme } from "../models/Aardvark.js"
import { Yak } from "../models/Aardvark.js"
import { Zebra } from "../models/Aardvark.js"


function _draw() {
  let template = ''
  for (let key in _animalEnclosure) {
    let animal = _animalEnclosure[key]
    template += `<li>${animal.name} the ${[key]} - ${animal.weight} lbs - ${animal.name} has ${animal.eyeColor} eyes</li>`
    console.log(animal)
  }

  document.getElementById('animals').innerHTML = template
}

let _animalEnclosure = {
  Aardvark: new Aardvark('Ardy', 50, 'Green'),
  Bear: new Bear('Bob', 500, 'Brown'),
  Cheetah: new Cheetah('Chester', 120, 'Blue'),
  Duck: new Duck('Daffy', 10, 'Brown'),
  Eagle: new Eagle('Eddy', 10, 'Green'),
  Fox: new Fox('Freddy', 10, 'Brown'),
  Gopher: new Gopher('George', 10, 'Brown'),
  Hyena: new Hyena('Henry', 30, 'Blue'),
  Iguana: new Iguana('Iggy', 7, 'Brown'),
  Jaguar: new Jaguar('John', 100, 'Green'),
  Kangaroo: new Kangaroo('Kenny', 100, 'Brown'),
  Lemur: new Lemur('Larry', 15, 'Brown'),
  Macaw: new Macaw('Mike', 2, 'Green'),
  Narwhal: new Narwhal('Nathan', 2000, 'Blue'),
  Orangutan: new Orangutan('Oscar', 150, 'Brown'),
  Pangolin: new Pangolin('Penny', 30, 'Brown'),
  Quetzal: new Quetzal('Quinn', 1, 'Green'),
  Raccoon: new Raccoon('Randy', 15, 'Brown'),
  Salamander: new Salamander('Sarah', 1, 'Blue'),
  Tortoise: new Tortoise('Terry', 50, 'Brown'),
  Unau: new Unau('Ulysses', 10, 'Green'),
  Vaquita: new Vaquita('Vanessa', 80, 'Brown'),
  Whale: new Whale('Wally', 2000, 'Brown'),
  Xeme: new Xeme('Xavier', 1, 'Blue'),
  Yak: new Yak('Yusuf', 2000, 'Brown'),
  Zebra: new Zebra('Zach', 800, 'Brown')
}

export class ZooController {
  constructor() {
    _draw()
  }
}
_draw()



