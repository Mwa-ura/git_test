var scoops = 10;
while (scoops >= 0) {
    if (scoops == 3) {
        alert("Ice cream is running low!");
    } else if (scoops > 9) {
        alert("Eat faster the ice cream is going to melt!");
    } else if (scoops == 2) {
        alert("Going once!");
    } else if (scoops == 1) {
        alert("Going twice!");
    } else if(scoops == 0) {
        alert("Gone!");
    } else {
        alert("Still more ice cream left, come and get more obese! ");
    }
    scoops -=1;
}
alert("Life without ice cream is obese free.")