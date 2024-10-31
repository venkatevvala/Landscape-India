function contactOwner(location) {
    alert(`Contacting the owner of land in ${location}.`);
    // Here, you can implement actual communication logic
}

$(document).ready(function() {
    // Initialize the map
    var map = L.map('map').setView([20.5937, 78.9629], 5); // Centered on India

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a click event to the map
    map.on('click', function(e) {
        var lat = e.latlng.lat;
        var lng = e.latlng.lng;
        
        // Display dummy prices based on selected location (for demo purposes)
        var dummyPrice = Math.floor(Math.random() * (10000000 - 1000000 + 1)) + 1000000; // Dummy price
        $('#price-display').text(`Selected Location (Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}) - Price: ₹${dummyPrice}`);
    });
});
