function contactOwner(location) {
    alert(`Contacting the owner of land in ${location}.`);
    // Here, you can implement actual communication logic
}

$(document).ready(function() {
    // Initialize the map
    const map = L.map('map').setView([20.5937, 78.9629], 5); // Centered on India

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Add markers for lands
    const lands = [
        { name: 'Land in Rajasthan', coords: [27.0238, 74.2176], price: '₹30,00,000' },
        { name: 'Land in Karnataka', coords: [15.3173, 75.7139], price: '₹50,00,000' },
        { name: 'Land in Maharashtra', coords: [19.0760, 72.8777], price: '₹40,00,000' },
        { name: 'Land in Gujarat', coords: [22.2587, 71.1924], price: '₹35,00,000' },
        { name: 'Land in Uttar Pradesh', coords: [27.0592, 79.0193], price: '₹28,00,000' },
        { name: 'Land in Punjab', coords: [30.7333, 76.7800], price: '₹32,00,000' },
    ];

    lands.forEach(land => {
        L.marker(land.coords)
            .addTo(map)
            .bindPopup(`${land.name}<br>Price: ${land.price}`);
    });

    // Price range display
    $('#price-range').on('input', function() {
        const value = $(this).val();
        $('#price-value').text(`Price: ₹${value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`);
    });

    // Search functionality
    $('#search').on('keyup', function() {
        const query = $(this).val().toLowerCase();
        $('.land-item').each(function() {
            const landName = $(this).text().toLowerCase();
            $(this).toggle(landName.includes(query));
        });
    });

    // State filter functionality
    $('#state-filter').on('change', function() {
        const selectedState = $(this).val();
        $('.land-item').each(function() {
            const landState = $(this).data('state');
            $(this).toggle(landState === selectedState || selectedState === '');
        });
    });

    // Feedback form submission
    $('#feedback-form').on('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your feedback!');
        $(this).trigger('reset'); // Reset the form
    });
});
