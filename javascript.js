var map;
function initMap() {
    //loads the map in Berlin
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 52.52000, lng: 13.40495},
        zoom: 12
    });

    // 4 hard-coded marker

    var marker = new google.maps.Marker({
        position: {lat: 52.562044, lng: 13.07000},
        map: map,
        title: 'Hello World!',
        label: "whats up"
    });
    var marker = new google.maps.Marker({
        position: {lat: 52.52000, lng: 13.40495},
        map: map,
        title: 'Hello World!'
    });
    var marker = new google.maps.Marker({
        position: {lat: 52.4986049, lng: 13.39179},
        map: map,
        title: 'Hello World!'
    });
    var marker = new google.maps.Marker({
        position: {lat: 52.52231, lng: 13.41308389},
        map: map,
        title: 'Hello World!'
    });


    //working
    // This event listener calls addMarker() when the map is double-clicked.
    google.maps.event.addListener(map, 'dblclick', function(event) {
        addMarker(event.latLng, map);
    });
    //working
    // Adds a marker to the map.
    function addMarker(location, map) {
        // Add the marker at the clicked location, and add the next-available label
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
    }


    //not working
    // Should do the same as above only when key is pressed and the icon should be a dog.
    var image = 'https://www.the-pet-world.com/WebRoot/StoreLDE/Shops/62377183/4F5D/0F37/0E52/2DF0/B7C5/C0A8/28BC/36E1/MAJOR-DOG-Greifball-Krake-Klein-01_xs.jpg';
    google.maps.event.addEventListener(map, "keypress", function(event){
        addMarker(event.latLng, map);

        function addMarker(location, map) {
            // Add the marker at the clicked location, and add the next-available label
            var marker = new google.maps.Marker({
                position: location,
                map: map,
                icon: image
            });
        }
    });

    //not working
    //Opens the description of the marker is only working for one marker right now.
    var infowindow = new google.maps.InfoWindow({
        content: "The first marker"
    });
    // Listens to click event on marker
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });


}