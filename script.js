console.log("while loop");
const colors = ["yellow", "blue", "red", "orange"];
let i = 0;
while (i < colors.length) {
   console.log("color is printing " + colors[i]);
   i++;
}
console.log ("all colors are printed");


console.log("\n" + "for loop");
const colors2 = ["yellow", "blue", "red", "orange"]; 
for (let i= 0; i < colors2.length; i++) {
   console.log ("color is printing " + colors2[i]);
}
console.log ("all colors are printed");

console.log("\n" + "Nieuwe stijl: array methods forEach");
const colors3 = ["yellow", "blue", "red", "orange"]; 
colors3.forEach ((element) => 
console.log ("color is printing " + element));


/*vragen
1.Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
For loop heeft 3 regels en while loop heeft 5 regels

2.Hoeveel regels neemt mijn forEach method in beslag?
ForEach method met een arrow function heeft 1 regel

3.Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? 
Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
1. geen infinite loop meer
2. Niet continu bijhouden met een i, om te continu de check te doen waar je bent gebleven

4.Kun je een array method gebruiken op een object? Het antwoord is nee.
Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?

const myColors = {
   colorWall: "blue",
   colorFruit: "orange",
   colorCar: "red",
   colorHair: "white",
   colorGras: "green",
 };
 
 for (x in myColors) {
   console.log(myColors[x]);
 }

Hij is aan het itereren, maar je itereert wel over een OBJECT.
Array Methods zijn NIET beschikbaar op een object.

*/


 

