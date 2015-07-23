App.module("Models", function (Models, App, Backbone, Marionette, $, _) {

    Models.ArticlePreviewModel = Backbone.Model.extend({
        defaults: {
            id: '',
            title: '',
            fullName: '',
            photo: '',
            img: '',
            ageStr: '',
            text: '',
            lengthStr: '',
        }
    });

    Models.ArticlePreviewCollection = Backbone.Collection.extend({
        model: Models.ArticlePreviewModel
    });

});
