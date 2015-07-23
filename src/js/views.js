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
            aside:  '.content__aside',
            topbar: '.topbar'
        }
    });

});
