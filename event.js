window.onload = init;
function init() { 
    var button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
}
function handleButtonClick() {
    var textInput = document.getElementById("songInputText");
    var songName = textInput.value;
    alert("adding "+ songName);
}