var scoops = 10;
while (scoops >= 0) {
    if (scoops == 3) {
        console.log("Ice cream is running low!");
    } else if (scoops > 9) {
        console.log("Eat faster the ice cream is going to melt!");
    } else if (scoops == 2) {
        console.log("Going once!");
    } else if (scoops == 1) {
        console.log("Going twice!");
    } else if(scoops == 0) {
        console.log("Gone!");
    } else {
        console.log("Still more ice cream left, come and get more obese! ");
    }
    scoops -=1;
}
alert("Life without ice cream is obese free.")

// palindrome
var word1 = "a";
var word2 = "nam";
var word3 = "nal p";
var word4 = "lan a c";
var word5 = "a man a p"; 
var phrase = "";
for (let i = 0; i<4; i++) {
    if (i == 0) {
        phrase = word5;
    } else if (i == 1) {
        phrase = phrase + word4; //a man a plan a c
    } else if (i == 2) {
        phrase = phrase + word1 + word3; //a man a plan a canal p
    } else if (i == 3) {
        phrase = phrase + word1 + word2 + word1;  //a man a plan a canal p
    }
}
alert(phrase);