// Configurações
Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound'
});

// Rota principal
Router.route('/', function() {
    this.render('pontos');
}, { name: 'pontos' });
