// HQ coordinates 
var hqCoords = {
    latitude: 47.624851,
    longitude: -122.52099
};

window.onload = getMyLocation;
function getMyLocation() {
    if (navigator.geolocation) {
        let watchButton = document.getElementById('watch');
        watchButton.onclick = watchLocation;
        let clearWatchButton = document.getElementById('clearWatch');
        clearWatchButton.onclick = clearWatch;
    }
    else {
        console.log("Oops! no geolocation on your machine.")
    }
}
function displayLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    var div = document.getElementById('location');
    div.innerHTML = `You are at Latitude: ${latitude} and Longitude: ${longitude}`;
    // Test the position accuracy
    div.innerHTML += ` (with an ${position.coords.accuracy} meters accuracy)`;
    // display the distance difference
    let km = computeDistance(position.coords, hqCoords)
    let distance = document.getElementById('distance');
    distance.innerHTML = `You are ${km} km from the WickedSmart HQ.`;
}
function displayError(error) {
    let errorTypes = {
        0: 'Unknown error',
        1: 'Permission denied',
        2: 'Position is not available',
        3: 'Request timeout'
    };
    let errorMessage = errorTypes[error.code];
    if (error.code == 0 || error.code == 2) {
        errorMessage += `: ${error.message}`;
    }
    let div = document.getElementById('location');
    div.innerHTML = errorMessage;
}

// Function to compute two points in a sphere 
function computeDistance(startCoords, destCoords) {
    let startLatRads = degreeToRadians(startCoords.latitude);
    let startLongRads = degreeToRadians(startCoords.longitude);
    let destLatRads = degreeToRadians(destCoords.latitude);
    let destLongRads = degreeToRadians(destCoords.longitude);

    let Radius = 6371; // Earth radius
    let distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) +
                    Math.cos(startLatRads) * Math.cos(destLatRads) *
                    Math.cos(startLongRads - destLongRads)) * Radius;

    return distance;
}

function degreeToRadians(degrees) {
    let radians = (degrees * Math.PI)/180;
    return radians;
}