var tempC = 10;
var level = 10 || 5;
var color = "blue";
var r = 3;
r = tempC;
var confusion = 2 + " is two!";
var string = '2' * 3.2;
var scoops = 10;
console.log((9 / 5) * tempC + 32);
console.log('Number' + " " + 2); 
console.log(level >= 5);
console.log(color == "pink");
console.log((2 * Math.PI) * r);
console.log(confusion);
console.log(string);

while (scoops > 0) {
    console.log('More icecream!');
    scoops -=1;
}
alert('Life without icecream is obese free!');

for (scoops = 10; scoops>0; scoops--) {
    console.log("More icecream for me!");
}
alert('No more icecream!')
// Snippet 1
var count = 0; 
for (let i = 0; i<5; i++) {
    console.log(count+=i);
}
alert(`Count is ${count}`);

//Snippet 2
var tops = 5;
while (tops > 0) {
    for (let i=0; i<3; i++) {
        console.log("Top is spinning");
    }
    tops -=1;
}

//Snippet 3
for (var batteries = 10; batteries>0; batteries--) {
    console.log('Charging battery');
}

//snippet 4 
for (scoops = 0; scoops<10; scoops++) {
    console.log("There is more icecream for all");
}
alert("Enough for today!")