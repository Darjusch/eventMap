var map;
var markers = new Array()

function initMap() {
    //loads the map in Berlin
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 52.49359, lng:  13.44538},
        zoom: 16
    });
    var markercode = new google.maps.Marker({
        position: {lat: 52.4940407, lng:   13.446276699999999 },
        map: map,
        title: 'Hello World!',
        label: "CODE",
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
    });
    var marker1 = new google.maps.Marker({
        position: {lat: 52.499907, lng:   13.4447055},
        map: map,
        title: 'Hello World!',
        label: "F"
    });
    var marker2 = new google.maps.Marker({
        position: {lat: 52.5011464, lng:  13.442625799999973 },
        map: map,
        title: 'Hello World!',
        label: "F"
    });
    var marker3 = new google.maps.Marker({
        position: {lat: 52.49314409999999, lng:   13.446674099999996 },
        map: map,
        title: 'Hello World!',
        label: "F"
    });
    var marker4 = new google.maps.Marker({
        position: {lat: 52.4941122, lng:  13.437756199999967},
        map: map,
        title: 'Hello World!',
        label: "C"
    });
    var marker5 = new google.maps.Marker({
        position: {lat: 52.4933624, lng:   13.436901600000056 },
        map: map,
        title: 'Hello World!',
        label: "C"
    });
    var marker6 = new google.maps.Marker({
        position: {lat: 52.4934326, lng:  13.438335000000052 },
        map: map,
        title: 'Hello World!',
        label: "C"
    });
    var marker7 = new google.maps.Marker({
        position: {lat: 52.4971441, lng:   13.451196100000061 },
        map: map,
        title: 'Hello World!',
        label: "B"
    });
    var marker8 = new google.maps.Marker({
        position: {lat: 52.5014704, lng:   13.441630600000053 },
        map: map,
        title: 'Hello World!',
        label: "B"
    });
    var marker9 = new google.maps.Marker({
        position: {lat: 52.5007809, lng:   13.439301200000045 },
        map: map,
        title: 'Hello World!',
        label: "B"
    });
    var marker10= new google.maps.Marker({
        position: {lat: 52.5014704, lng:   13.441630600000053 },
        map: map,
        title: 'Hello World!',
        label: "B"
    });
    var marker11 = new google.maps.Marker({
        position: {lat: 52.4995608, lng:   13.43929270000001 },
        map: map,
        title: 'Hello World!',
        label: "B"
    });
    var marker12 = new google.maps.Marker({
        position: {lat: 52.49534999999999, lng:    13.431890100000032  },
        map: map,
        title: 'Hello World!',
        label: "F"
    });
    var marker13 = new google.maps.Marker({
        position: {lat: 52.4986775, lng:  13.426234600000043  },
        map: map,
        title: 'Hello World!',
        label: "F"
    });
    var marker14 = new google.maps.Marker({
        position: {lat: 52.4966706, lng:   13.422560799999928  },
        map: map,
        title: 'Hello World!',
        label: "F"
    });
    var marker15 = new google.maps.Marker({
        position: {lat: 52.4912651, lng:    13.449740199999951  },
        map: map,
        title: 'Hello World!',
        label: "F"
    });
    var marker16 = new google.maps.Marker({
        position: {lat: 52.49036, lng:   13.44909000000007  },
        map: map,
        title: 'Hello World!',
        label: "F"
    });
    var marker17 = new google.maps.Marker({
        position: {lat: 52.5071028, lng:   13.454466400000001   },
        map: map,
        title: 'Hello World!',
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'


});
    var marker18 = new google.maps.Marker({
        position: {lat: 52.49758, lng:    13.432450099999983  },
        map: map,
        title: 'Hello World!',
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'

    });
    var marker19 = new google.maps.Marker({
        position: {lat: 52.48988430000001, lng:   13.444695300000035   },
        map: map,
        title: 'Hello World!',
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    });

    // 4 hard-coded marker

    // var markers = new Array()

    var marker = new google.maps.Marker({
        position: {lat: 52.49359, lng:  13.44538},
        map: map,
        title: 'Hello World!',

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
    var image = 'https://cdn1.iconfinder.com/data/icons/material-device/20/access-time-32.png';
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
        "<tr><td>Arrival:</td> <td><input type='time' id='time'/></td> </tr>" +
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
        var address = escape(document.getElementById("description").value);
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