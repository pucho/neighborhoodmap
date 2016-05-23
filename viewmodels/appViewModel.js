// Main viewmodel class
define(['bower_components/knockout/dist/knockout.js'], function(ko) {

  function getMapData(data) {
    this.lat = data.lat;
    this.long = data.long;
    return this.lat + " " + this.long;
  };

  return function appViewModel() {
    this.firstName = ko.observable('Bert');
    this.lastName = ko.observable('Rodriguez');
    this.firstNameCaps = ko.pureComputed(function() {
        return this.firstName().toUpperCase();
    }, this);
    this.latlong = ko.observable(getMapData({lat: 10, long:10}));
  };
});
