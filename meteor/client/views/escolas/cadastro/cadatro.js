Template.escolaCadastro.rendered = function(){
    var vm = new Vue({
        el : "#vue-escola-cadastro",
        data : {
            professores : [
                { nome : 'teste 1' },
                { nome : 'teste 2' },
                { nome : 'teste 3' },
                { nome : 'teste 4' },
            ]
        },
        sync : {
            professores2 : function(){
                return Professores.find();
            }
        },
        methods : {
            salvar : function(e){
                e.preventDefault();
            }
        }
    });
}
