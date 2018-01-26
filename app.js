// Create sanity check below

console.log('hello world')
// # 1
// find the length of the array
var winterOlympicSports = ['snowboarding', 'hockey', 'ice skating', 'curling'];
    // write code below
var length=winterOlympicSports.length;

console.log('hello test')


// # 2
// Get index 2 by accessing the sports array
var sports = ['basketball', 'volleyball', 'soccer', 'tennis'];
    // write code below

console.log(sports[2]);


// # 3
// Change 'helmet' to 'sweat band'
var tennisEquipment= ['raquet', 'tennis balls', 'net', 'helmet'];
    // write code below

   tennisEquipment.splice(3,1,"sweatband")


console.log(tennisEquipment) // ['raquet', 'tennis balls', 'net', 'sweat band'];
  

// # 4
// Use push method to add 'Japan' 
var countries = ['Mexico', 'Spain', 'Thailand', 'USA', 'Brazil'];
    // write code below

    countries.push("Japan")
console.log(countries) // ['Mexico', 'Spain', 'Thailand', 'USA', 'Brazil', 'Japan'];


// # 5
// Use pop method. Console.log array and value that was popped off
var states = ['California', 'Mississippi', 'Hawaii', 'Michigan', 'New York'];
    // write code below
states.pop();

console.log(states) // [California', 'Mississippi', 'Hawaii', 'Michigan', 'New York'];
console.log('New York') // 'New York'


// # 6
// Use unshift method to add 'Swahili'
var languages = ['Dutch', 'Mongolian', 'English', 'Finnish', 'Spanish'];
    // write code below
languages.unshift('Swahili')
console.log(languages) // ['Swahili', 'Dutch', 'Mongolian', 'English', 'Finnish', 'Spanish']


// # 7
// Use shift method. Console.log array and value that was shifted
var cities = ['Honolulu', 'Los Angeles', 'Philidelphia', 'New Orleans', 'Denver'];
    // write code below
cities.shift();
console.log(cities) // ['Los Angeles', 'Philidelphia', 'New Orleans', 'Denver'];
console.log('Honolulu') // 'Honolulu'


// # 8
// Sort array from lowest to highest
var numbers = [5, 3, 1, 2, 8, 4];
    // write code below
numbers.sort();
console.log(numbers) // [1, 2, 3, 4, 5, 8];


// # 9
// Reverse the array
var counting = ['one', 'two', 'three', 'four', 'five'];
    // write code below
counting.reverse();
console.log(counting) // ['five', 'four' , 'three', 'two', 'one'];


// # 10
// Return index number of 'vanilla'
var iceCreamFlavors = ['rainbow sherbert', 'rocky road', 'cookies and cream', 'vanilla', 'strawberry'];
    // write code below
var nilla=iceCreamFlavors.indexOf('vanilla');

console.log(nilla) // 4;


// # 11
// Return index number of 'green tea'
var iceCreamFlavors = ['rainbow sherbert', 'rocky road', 'cookies and cream', 'vanilla', 'strawberry'];
    // write code below
var tea=iceCreamFlavors.indexOf('green tea');

console.log(tea) // -1;


// # 12
// Use slice method to remove 'yellow', 'black', 'red'
var colors = ['green', 'yellow', 'black', 'red', 'pink'];
    // write code below

    colors.slice(1,3);

console.log(colors) // ['green', 'pink'];
//help!!

// # 13
// Use splice method to delete the value 'lion'. Console.log array and the item that was removed
var animals = ['bird', 'dog', 'cat', 'lion', 'wallaby', 'sloth'];
    // write code below
animals.splice(3,1)

console.log(animals) // ['bird', 'dog', 'cat', 'wallaby', 'sloth'];
console.log('lion') // ['lion']


// # 14
// Use splice method to delete 2 values 'wallaby' & 'sloth'. Console.log array and the item that was removed
var animals = ['bird', 'dog', 'cat', 'lion', 'wallaby', 'sloth'];
    // write code below
animals.splice(4,2)

console.log(animals) // ['bird', 'dog', 'cat','lion'];
console.log('wallaby','sloth') // ['wallaby', 'sloth']


// # 15
// Use splice method to add the value 'Stegosaurus' before 'Velociraptor'
var dinosaurs = ['Tyrannosaurus', 'Velociraptor', 'Triceratops', 'Pterodactyl', 'Brachiosaurus'];
    // write code below
dinosaurs.splice(1,0,"Stegosaurus",)

console.log(dinosaurs) // ['Tyrannosaurus', 'Stegosaurus', 'Velociraptor', 'Triceratops', 'Pterodactyl', 'Brachiosaurus']


// # 16
// Use splice method to delete the value 'Pterodactyl', then add 'Stegosaurus' and 'Diplodocus'. Console.log the array and deleted value
var dinosaurs = ['Tyrannosaurus', 'Velociraptor', 'Triceratops', 'Pterodactyl', 'Brachiosaurus'];
    // write code below

dinosaurs.splice(3,1, "Stegosaurus", "Diplodocus")

console.log(dinosaurs) // ['Tyrannosaurus', 'Stegosaurus', 'Velociraptor', 'Triceratops', 'Stegosaurus', 'Diplodocus','Brachiosaurus']
console.log('Pterodactyl') // ['Pterodactyl'];