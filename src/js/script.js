let App = new Marionette.Application();

App.addRegions({
    mainRegion: '.main'
});

App.on('start', () => {
    Backbone.history.start();
});
