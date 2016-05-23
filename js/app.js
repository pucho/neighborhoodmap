require(['bower_components/knockout/dist/knockout.js', '../viewModels/appViewModel', 'bower_components/domready/ready.min.js'], function(ko, appViewModel) {
    ko.applyBindings(new appViewModel());
});
