let App = new Marionette.Application();

App.addRegions({
    mainRegion: '.main'
});



App.on('start', () => {
    console.log('app runned')

    let layout = new App.Views.ContentView();

    App.mainRegion.show(layout)

    let coll = new App.Models.ArticlePreviewCollection(Stub.articles);

    let collView = new App.Views.ArticlesView({
        collection: coll
    });

    layout.main.show(collView);
})
