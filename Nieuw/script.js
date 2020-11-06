 /* Opdracht: Iterators - oude en nieuwe stijl
Het Engelse "to iterate" betekent "iets herhaaldelijk doen". Dingen herhaaldelijk doen is iets dat je in software regelmatig gaat doen. Eén herhaling noemen we dan één "iteratie".

Meestal ga je dingen herhaaldelijk doen als je een verzameling van (vergelijkbare) dingen hebt, zoals in het geval van een array. Een praktisch voorbeeld: je hebt een array van test-scores en je wil weten wat de gemiddelde test-score is, of je wil weten wat de laagste of hoogste test-score is. Je bent dan aan het "itereren over een array".

In JavaScript kun je op meerdere manieren over dingen itereren.

Oude stijl: loops
Loops kun je voor meer gebruiken dan itereren over een lijst van dingen. Maar we hebben het nu wel over die manier van loops gebruiken.

While loop:

Maak en nieuwe map en nieuwe javascript file.
Maak een array genaamd colors met de kleuren: yellow, blue, red, orange.
Schrijf een while loop die de kleuren in de console logged en stopt wanneer alle kleuren geprint zijn. */

 let colors = ["yellow", "blue", "red", "orange"];
 let i = 0;
 while (i < colors.length) {
      console.log("The color is " + colors[i]);
    i++;
    }

/* For loop:

Gebruik dezelfde array als startpunt.
Schrijf een for loop die de kleuren in de console logged en stopt wanneer alle kleuren geprint zijn.
Gebruik de lengte van de array in je for loop: array.length
Het schrijven van een for of while loop kan best veel ruimte in beslag nemen. Daarnaast is het ook makkelijk om een foutje te maken. */

for (let i = 0; i < colors.length; i++) {
    console.log("The color is " + colors[i]);
}

/* forEach:

Gebruik dezelfde kleuren-array als startpunt
Gebruik de forEach array method, om alle items in je array te loggen naar de console. */
colors.forEach(color => console.log("The color with forEach is " + color));
 

// Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
// - 6 regel

// Hoeveel regels neemt mijn forEach method in beslag?
// - 1 regel

// Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
// - Is beter leesbaar, korter, makkelijker

// Kun je een array method gebruiken op een object? Het antwoord is nee.
// Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
// Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?

const object = { a: 1, b: 2, c: 3, d: 4, e: 5 };

for (const num in object) {
  console.log(`${num}: ${object[num]}`);
}


