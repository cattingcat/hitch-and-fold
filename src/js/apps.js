App.module('ArticlesApp', function (ArticlesApp, App, Backbone, Marionette, $, _) {
    ArticlesApp.AppRouter = Marionette.AppRouter.extend({
        appRoutes: {
            'articles': 'showArticles',
            'options': 'showOptions'
        }
    });

    let ArticlesController = Marionette.Controller.extend({
        initialize(o){
            this.articleCollection = App.reqres.request('get:articles');
            let view = new App.Views.ArticlesView({
                collection: this.articleCollection
            });
            o.region.show(view);
        }
    });

    let OptionsController = Marionette.Controller.extend({
        initialize(o){
            let view = new App.Views.OptionsView({ collection: new Backbone.Collection([1, 2, 3]) });
            o.region.show(view);
        }
    });

    ArticlesApp.AppController = Marionette.Controller.extend({
        initialize(){
            let layout = new App.Views.ContentView();
            App.mainRegion.show(layout)
            this.currentLayout = layout;
        },
        showArticles(){
            new ArticlesController({region : this.currentLayout.main});
        },
        showOptions(){
            new OptionsController({region : this.currentLayout.main});
        }
    });

    App.addInitializer(function(){
        let appCtrl = new ArticlesApp.AppController();
        new ArticlesApp.AppRouter({ controller: appCtrl });
    });
});


App.module("LoginApp", function (LoginApp, App, Backbone, Marionette, $, _) {
    LoginApp.AppRouter = Marionette.AppRouter.extend({
        appRoutes: {
            "login": "showLoginPage"
        }
    });

    LoginApp.AppController = Marionette.Controller.extend({
        showLoginPage(){
            console.log('showLoginPage route');
        }
    });

    App.addInitializer(function(){
        let appCtrl = new LoginApp.AppController();
        new LoginApp.AppRouter({ controller: appCtrl });
    });
});
