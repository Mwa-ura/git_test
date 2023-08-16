window.onload = showTemps;

function showTemps() {
    var tempByHour = new Array();
    tempByHour[0] = 59.1;
    tempByHour[1] = 58.0;
    tempByHour[2] = 60.2;
    tempByHour[3] = 61.3;
    tempByHour[4] = 58.1;
    tempByHour[5] = 57.5;
    
    //iterate
    for (let i=0; i<tempByHour.length; i++) {
        var theTemp = tempByHour[i];
        var id = "temp" + i;
        var li = document.getElementById(id);
        if (i == 0) {
            li.innerHTML = "The temperature at noon is "+ theTemp;
        } else {
            li.innerHTML = "The temperature at " + i +" was "+ theTemp;
        }
    }
}