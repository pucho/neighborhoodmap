function map(lat = 41.8339042, long = -88.0123461) {
  this.mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(lat,long),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  this.map = new google.maps.Map(document.getElementById('map'), this.mapOptions);
};

function appViewModel() {
  var self = this;

  self.firstName = ko.observable('Bert');
  self.lastName = ko.observable('Rodriguez');
  self.firstNameCaps = ko.pureComputed(function() {
      return self.firstName().toUpperCase();
  });

  self.mapMarkers = ko.observableArray([]); //List of markers for the mapMarkers
  self.neighborHood = ko.observable('Chicago'); //Selected neighborhood
  self.latitude = ko.observable(41.8339042); //Selected neighborhood map lat
  self.longitude = ko.observable(-88.0123461);

  self.toggleList = ko.observable(); //Toggle button for hiding/showing list

  self.map = map(self.latitude(), self.longitude());



};

$(function(){
  ko.applyBindings(new appViewModel());
});
