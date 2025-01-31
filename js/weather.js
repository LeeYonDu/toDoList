function onGeoOk(position){
    const lat = position.coords.latitude;
    const lug = position.coords.longitutde;
    console.log("You live in", lat, lug);
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
