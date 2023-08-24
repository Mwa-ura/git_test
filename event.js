window.onload = init;
function init() { 
    var button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
}
function handleButtonClick() {
    var textInput = document.getElementById("songInputText");
    var songName = textInput.value;
    // Check whether the user have entered a text
    if (songName == "") {
        alert("You didn't add a song");
    } else { 
        alert("adding "+ songName);
    }
    var li = document.createElement("li");
    li.innerHTML = songName;
    var ul = document.getElementById("playlist");
    if (li == "") {
        return null;
    } else { 
        ul.appendChild(li);
    }
}