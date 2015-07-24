App.module("Views", function (Views, App, Backbone, Marionette, $, _) {

    Views.ArticlePreviewView = Marionette.ItemView.extend({
        tagName: 'article',
        className: 'article-preview',
        template: '#article-preview',
        model: App.Models.ArticlePreviewModel,
        events: {

        }
    });

    Views.ArticlesView = Marionette.CollectionView.extend({
        tagName: 'div',
        className: 'articles-list',
        childView: Views.ArticlePreviewView
    });


    Views.ContentView = Marionette.LayoutView.extend({
        template: '#content-page-layout',
        tagName: 'div',
        regions: {
            main:   '.content__main',
            aside:  '.content__aside'
        },
        events: {
            'click .tabs__tab': 'onTabClick'
        },

        onTabClick() {
            App.commands.execute('commandExample', [1, 2, 3]);
            App.vent.trigger('ventExample', [1, 2, 3]);
            App.reqres.request('reqresExample', [1, 2, 3]);
        }
    });

    Views.OptionsView = Marionette.LayoutView.extend({
        template: '#options-view',
        initialize(o){
            console.log('OptionView initialise ' + o)
        },
        onBeforeRender(){
            console.log('hi');
        }
    });

});
