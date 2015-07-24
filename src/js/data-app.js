App.module("DataApp", function (AppBuses, App, Backbone, Marionette, $, _) {
    App.addInitializer(function(){
        App.commands.setHandler('commandExample', function(a){
            console.log('command triggered ' + a)
        });

        App.reqres.setHandler('get:articles', function(a){
            let coll = new App.Models.ArticlePreviewCollection(Stub.articles);
            return coll;
        });

        App.vent.on('ventExample', function(a){
            console.log('vent triggered ' + a)
        });
    });
});
