var response;

//Is this correct?
$(".loading-overlay").show();
$.getJSON('http://localhost:3000/breweries')
  .done(function(data){
    response = data;
    $(function(){
      ko.applyBindings(new appViewModel());
    });
    map();
    $(".loading-overlay").hide();
  }).fail(function(){
    alert('failed to retrieve data');
  });

//Live marker list that gets filtered with checkboxes
var liveMarkerList = [];
//Static markerList
var markerList = [];

//Generate a Brewery List from the brewerydb api JSON response
function generateBreweryList(response){
  var orderedList = response.data;
  return orderedList;
}

//Generate a map marker Array from the brewerydb api JSON response
function generateMarkerArray(response){
  var markerArray = [];
  var marker;
  for (var i = 0; i < response.data.length; i++) {
    marker = { 'name': response.data[i].brewery.nameShortDisplay,
                'lat': response.data[i].latitude,
                'lng': response.data[i].longitude,
                'id': response.data[i].id,
                'locType': response.data[i].locationType
              };
    markerArray.push(marker);
  }
  return markerArray;
}

//Map generator
function map(lat = 41.89044373452023, long = -87.62190229812012) {
  this.mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(lat,long),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  this.map = new google.maps.Map(document.getElementById('map'), this.mapOptions);

  var marker, latlng, infowindow;
  var breweryCoordinates = generateMarkerArray(response);

  //Generate all the markers for the selected place
  infowindow = new google.maps.InfoWindow({
    content: "Loading..."
  });

  for (var i = 0; i < breweryCoordinates.length; i++) {
    latlng = new google.maps.LatLng(breweryCoordinates[i].lat, breweryCoordinates[i].lng);
    marker = new google.maps.Marker({
      position: latlng,
      title: breweryCoordinates[i].name,
      map: map,
      animation: google.maps.Animation.DROP,
      icon: 'img/beerIcon.png',
      locType: breweryCoordinates[i].locType,
      id: breweryCoordinates[i].id
    });

    // http://you.arenot.me/2010/06/29/google-maps-api-v3-0-multiple-markers-multiple-infowindows/
    google.maps.event.addListener(marker, 'click', function(){
      infowindow.setContent(`${this.title} <br> ${this.locType}`);
      infowindow.open(map, this);
      this.setAnimation(google.maps.Animation.BOUNCE);
      var self = this;
      setTimeout(function(){ self.setAnimation(null); }, 1400);
    });
    liveMarkerList.push(marker);
    markerList.push(marker);
  }
}

// Sets the map on all markers in the array.
function setMapOnAll(map, markers) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null, markerList);
}

// Shows any markers currently in the array.
function showMarkers(markers) {
  setMapOnAll(map, markers);
}


function appViewModel() {
  var self = this;

  //List filters
  self.isOpen = ko.observable(false);
  self.isPublic = ko.observable(false);

  //List of breweries on the selected neighborhood
  const originalList = generateBreweryList(response);
  self.breweryList = ko.observableArray(originalList);

  //Filter breweryList with checkboxes
  self.filterBreweries = function() {
    //Create a shallow copy of the full brewerylist
    var breweryList = generateBreweryList(response).slice(0);
    var liveMarkerList = markerList.slice(0);
    var filteredOutBreweries = [];

    if (self.isOpen()) {
      for (var i = 0; i < breweryList.length; i++) {
        //Remove closed breweries
        if (breweryList[i].isClosed === 'Y') {
          filteredOutBreweries.push(breweryList.splice(i, 1)[0]);
        }
      }
    }

    if (self.isPublic()) {
      for (var j = 0; j < breweryList.length; j++) {
        //Remove private breweries
        if (breweryList[j].openToPublic != 'Y') {
          filteredOutBreweries.push(breweryList.splice(j, 1)[0]);
        }
      }
    }

    if (!self.isPublic() && !self.isOpen()){
      showMarkers(markerList);
    }
    //Save new breweryList
    self.breweryList(breweryList);

    //modify liveMarkerList against the filteredbreweries
    for (var n = 0; n < liveMarkerList.length; n++) {
      for (var m = 0; m < filteredOutBreweries.length; m++) {
        if(filteredOutBreweries[m].id === liveMarkerList[n].id){
          liveMarkerList.splice(m, 1);
        }
      }
    }
    clearMarkers();
    showMarkers(liveMarkerList);
    return true;
  };

  //Animate marker when clicking on the List
  self.animateMarker = function(brewery) {
    for (var i = 0; i < liveMarkerList.length; i++) {
      if (liveMarkerList[i].id === brewery.id) {
        google.maps.event.trigger(liveMarkerList[i], 'click');
      }
    }
    return true;
  };

  //List of markers for the mapMarkers
  self.mapMarkers = ko.observableArray(liveMarkerList);
}
