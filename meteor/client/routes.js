// Configurações
Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound'
});

// Rota principal
Router.route('/', function() {
    this.render('landpage');
}, { name: 'landpage' });


// Professores
ProfessorController = RouteController.extend({
    layoutTemplate : 'professorLayout',
});

Router.route('/professor/', function() {
    this.render('professorIndex');
}, { name: 'professor.index' });


Router.route('/professor/cadastro/', function() {
    this.render('professorCadastro');
}, { name: 'professor.cadastro', controller : ProfessorController });

// Professores
EscolasController = RouteController.extend({
    layoutTemplate : 'escolaLayout',
});

Router.route('/escola/cadastro/', function() {
    this.render('escolaCadastro');
}, { name: 'escola.cadastro', controller : ProfessorController });
