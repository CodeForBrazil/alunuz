Meteor.methods({
    cadastrarProfessor: function(email, senha, data) {

        var userData = {
            email : email,
            password : senha,
            profile : _.extend(data, { kind : 'professor' })
        };

        var _id = Accounts.createUser(userData);

        return _id;

        // Professores.insert(data, function(error, _id) {
        //     vue.sending = false;
        //     vue.dirty = false;
        //
        //     if (error) {
        //         swal('Ocorreu um erro!', 'Não foi possível cadastrar o professor.', 'error');
        //     }
        //
        //     swal('Sucesso!', 'Professor cadastrado!', 'success');
        //     VueUtils.limparCampos(vue.form);
        // });
    }
});
