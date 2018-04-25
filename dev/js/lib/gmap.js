(function() {
    function init_map() {
        var mapOptions = {
            zoom: 16,
            center: new google.maps.LatLng(32.61402, -115.405829),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            draggable: true,
            scrollwheel: false,
            disableDoubleClickZoom: true,
            zoomControl: true,
            styles: [
                { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
                {
                    elementType: 'labels.text.stroke',
                    stylers: [{ color: '#242f3e' }]
                },
                {
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#746855' }]
                },
                {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#d59563' }]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#d59563' }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{ color: '#263c3f' }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#6b9a76' }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{ color: '#38414e' }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#212a37' }]
                },
                {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#9ca5b3' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{ color: '#746855' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#1f2835' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#f3d19c' }]
                },
                {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{ color: '#2f3948' }]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#d59563' }]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{ color: '#17263c' }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#515c6d' }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{ color: '#17263c' }]
                }
            ]
        };
        var mapContainer = document.getElementById('gmap');
        if (!mapContainer) return;

        map = new google.maps.Map(mapContainer, mapOptions);
        marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(32.61402, -115.405829),
            icon:
                'data:image/png;base64,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'
        });
        infowindow = new google.maps.InfoWindow({
            content:
                '<p class="location__text location__text_iw">Devise</p><p class="location__text location__text_iw">Street</p><p class="location__text location__text_iw">Mexicali, Baja California</p>',
            maxWidth: 500
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
    }
    google.maps.event.addDomListener(window, 'load', init_map);
})();
