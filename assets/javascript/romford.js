// Wait for the document to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Initialize the map
    var map = L.map("map").setView([51.5783599, 0.1750624], 13);

    // Add the map tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18,
    }).addTo(map);

    // Add a marker to the map
    var marker = L.marker([51.5783599, 0.1750624]).addTo(map);
});

$(document).ready(function () {
    $(".search-button").click(function () {
        var address = $("#address-search").val();
        var destination = "51.5783599,0.1750624";
        var url = "https://www.google.com/maps/dir/" + encodeURIComponent(address) +
            "/" + destination;

        window.open(url, "_blank");
    });
});

