var ApplicationController;

if (Meteor.isClient) {
    Router.configure({
        layoutTemplate: 'layout',
        notFoundTemplate: 'notFound'
    });
    Router.route('/login', function() {
        this.render('login');
        return this.layout('blankLayout');
    }, {
        name: 'login'
    });
    ApplicationController = RouteController.extend({
        layoutTemplate: 'layout',
        notFoundTemplate: 'notFound'
    });
    Router.route('/perfil', function() {
        return this.render('perfil');
    }, {
        controller: 'ApplicationController'
    });
}
