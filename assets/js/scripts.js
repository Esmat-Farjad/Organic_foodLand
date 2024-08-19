const observer = new IntersectionObserver((entries, observer) => {
    entries.filter(e => e.isIntersecting).forEach(entry => {
        entry.target.classList.add("slide-up-animation");
        observer.unobserve(entry.target);
    });
});
document.querySelectorAll(".section-holder").forEach(e => {
    observer.observe(e)
});
document.querySelector(".main-heading").classList.add("zoom-animation");
window.onload = function(){
// Check if Geolocation is available in the browser
if ("geolocation" in navigator) {
    // Request the current position
    navigator.geolocation.getCurrentPosition(
        function(position) {
            // Success callback
            console.log("Latitude: " + position.coords.latitude);
            console.log("Longitude: " + position.coords.longitude);
            document.getElementById("search-location").value ="Kabul, Afghanistan";
            console.log("Altitude: " + (position.coords.altitude || "Not available"));
            console.log("Accuracy: " + position.coords.accuracy + " meters");
            console.log("Altitude Accuracy: " + (position.coords.altitudeAccuracy || "Not available") + " meters");
            console.log("Heading: " + (position.coords.heading || "Not available"));
            console.log("Speed: " + (position.coords.speed || "Not available") + " meters/second");
        },
        function(error) {
            // Error callback
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    console.error("User denied the request for Geolocation.");
                    document.getElementById("error").style.display="block";
                    document.getElementById("error").innerHTML = "User denied the request for location.";
                    setTimeout(() => {
                        document.getElementById("error").style.display="none"
                    }, 5000);
                    break;
                case error.POSITION_UNAVAILABLE:
                    console.error("Location information is unavailable.");
                    break;
                case error.TIMEOUT:
                    console.error("The request to get user location timed out.");
                    break;
                case error.UNKNOWN_ERROR:
                    console.error("An unknown error occurred.");
                    break;
            }
        },
        {
            enableHighAccuracy: true,  // Optional: request high accuracy
            timeout: 5000,             // Optional: time to wait for a response (in milliseconds)
            maximumAge: 0              // Optional: maximum age of cached position (in milliseconds)
        }
    );
} else {
    console.log("Geolocation is not supported by this browser.");
}

    if(document.getElementById("search-location").value=''){
        document.querySelector(".notify").classList.remove("not-active");
    } else {
        document.querySelector(".notify").classList.add("not-active");
    }

}
function increase(){
    let currentValue = document.getElementById("number-input").value;
    intValue = Number(currentValue);
    intValue++;
    document.getElementById("number-input").value = intValue;
}
function decrease(){
    let currentValue = document.getElementById("number-input").value;
    if(Number(currentValue) > 0) {
        intValue = Number(currentValue);
        intValue--;
        document.getElementById("number-input").value = intValue;
    } else {
        document.getElementById("number-input").style.border = "1px solid red";
    }
}