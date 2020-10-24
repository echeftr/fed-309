let colorArray = ['yellow', 'blue', 'red', 'orange'];

// While loop
// let i = 0;
// while (i < colorArray.length) {
//     console.log(colorArray[i]);
//     i++;
// };


// For loop
// for (i = 0; i < colorArray.length; i++){
//     console.log(colorArray[i]);
// }

// Nieuwe stijl: array methods (forEach)
colorArray.forEach(i => console.log(i));

// 1. Mijn while loop heeft 5 regels en for loop 3 regels.
//  2. Mijn forEach heeft 1 regel
//  3. Meer voordelen een array method zijn dat het overzichtelijk is en dat de kans dat je fouten maakt kleiner is.
//  4. Nee je kan geen array method gebruiken voor een object. Wel zoals hieronder.

// loopin through an object
const object = { a: 1, b: 2, c: 3, d: 4, e: 5};

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}