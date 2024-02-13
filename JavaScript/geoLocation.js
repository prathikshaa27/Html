if ("geolocation" in navigator) {

    navigator.geolocation.getCurrentPosition(
      
        function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log("Latitude:", latitude);
            console.log("Longitude:", longitude);
        },
        
        function(error) {
            console.error("Error getting geolocation:", error.message);
        }
    );
} else {
    console.error("Geolocation is not supported by this browser.");
}