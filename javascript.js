var map;
var markers = new Array()

function initMap() {
    //loads the map in Berlin
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 52.49359, lng:  13.44538},
        zoom: 16
    });

    // 4 hard-coded marker

    // var markers = new Array()

    var marker = new google.maps.Marker({
        position: {lat: 52.49359, lng:  13.44538},
        map: map,
        title: 'Hello World!',
        //label: "whats up"
    });

    markers.push(marker)

    var marker = new google.maps.Marker({
        position: {lat: 52.52000, lng: 13.40495},
        map: map,
        title: 'Hello World!'
    });

    markers.push(marker)

    var marker = new google.maps.Marker({
        position: {lat: 52.4986049, lng: 13.39179},
        map: map,
        title: 'Hello World!'
    });

    markers.push(marker)

    var marker = new google.maps.Marker({
        position: {lat: 52.52231, lng: 13.41308389},
        map: map,
        title: 'Hello World!'
    });

    markers.push(marker)

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

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });

        markers.push(marker)
    }


    //working
    //When right clicking a dog icon appears.
    var image = 'https://www.the-pet-world.com/WebRoot/StoreLDE/Shops/62377183/4F5D/0F37/0E52/2DF0/B7C5/C0A8/28BC/36E1/MAJOR-DOG-Greifball-Krake-Klein-01_xs.jpg';
    google.maps.event.addListener(map, "rightclick", function(event){
        addMarker(event.latLng, map);
        function addMarker(location, map) {
            var marker = new google.maps.Marker({
                position: location,
                map: map,
                icon: image,
                title: "kkkkk"

        });

        }

    });

    var html = "<table>" +
        "<tr><td>Name:</td> <td><input type='text' id='name'/> </td> </tr>" +
        "<tr><td>Description:</td> <td><input type='text' id='description'/> </td> </tr>" +
        "<tr><td>Time:</td> <td><input type='time' id='time'/></td> </tr>" +
        "<tr><td>Type:</td> <td><select id='type'>" +
        "<option value='bar' SELECTED>bar</option>" +
        "<option value='restaurant'>restaurant</option>" +
        "<option value='cafe'>cafe</option>" +
        "<option value='club'>club</option>" +
        "<option value='something else'>something else</option>" +
        "</select> </td></tr>" +
        "<tr><td></td><td><input type='button' value='Done' onclick='saveData()'/></td></tr>";
    //working
    //Opens the description of the marker.
    var infowindow = new google.maps.InfoWindow({
        content: html
    });
    // Listens to click event on marker


    markers.forEach(function(marker)
    {
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });
    });


    //////// test database
    /*
    function saveData() {
        var name = escape(document.getElementById("name").value);
        var address = escape(document.getElementById("address").value);
        var type = document.getElementById("type").value;
        var latlng = marker.getPosition();

        var url = "phpsqlinfo_addrow.php?name=" + name + "&address=" + address +
            "&type=" + type + "&lat=" + latlng.lat() + "&lng=" + latlng.lng();
        downloadUrl(url, function(data, responseCode) {
            if (responseCode == 200 && data.length >= 1) {
                infowindow.close();
                document.getElementById("message").innerHTML = "Location added.";
            }
        });
    }

    function downloadUrl(url, callback) {
        var request = window.ActiveXObject ?
            new ActiveXObject('Microsoft.XMLHTTP') :
            new XMLHttpRequest;

        request.onreadystatechange = function() {
            if (request.readyState == 4) {
                request.onreadystatechange = doNothing;
                callback(request.responseText, request.status);
            }
        };

        request.open('GET', url, true);
        request.send(null);
    }

    function doNothing() {}

    */

}