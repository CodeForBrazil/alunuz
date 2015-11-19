Template.professorCadastro.rendered = function(){
    Vue.config.debug = true;
    var vm = new Vue({
        el : "#vue-professor-cadastro",
        data : {
            form : {
                _id : '',
                nome : '123',
                senha : '123',
                matricula : '123',
                cpf : '123',
                telefone : '123',
                email : '123',
                endereco : '123',
                numero : '123',
                carreira : '123',
                cargo : '123',
                nivel : '123',
                area_atuacao : '123',
                orgao_lotacao : '123',
                lotacao_trabalho : '123',
                quadro : '123',
                carga_semanal : '123',
                formacao : '123',
                rit : '123',
                permuta : '123',
                convenio : '123',
                lat : '123',
                lng : '123',
            },
            dirty : false,
            sending : false,
            professores : []
        },
        computed : {
            validation : function (){
                return {
                    nome : (this.dirty) ? !!this.form.nome.trim() : true,
                    senha : (this.dirty) ? !!this.form.senha.trim() : true,
                    matricula : (this.dirty) ? this.form.matricula != '' : true,
                    cpf : (this.dirty) ? this.form.cpf != '' : true,
                    telefone : (this.dirty) ? !!this.form.telefone.trim() : true,
                    email : (this.dirty) ? !!this.form.email.trim() : true,
                    endereco : (this.dirty) ? !!this.form.endereco.trim() : true,
                    numero : (this.dirty) ? this.form.numero != '' : true,
                    carreira : (this.dirty) ? !!this.form.carreira.trim() : true,
                    cargo : (this.dirty) ? !!this.form.cargo.trim() : true,
                    nivel : (this.dirty) ? !!this.form.nivel.trim() : true,
                    area_atuacao : (this.dirty) ? !!this.form.area_atuacao.trim() : true,
                    orgao_lotacao : (this.dirty) ? !!this.form.orgao_lotacao.trim() : true,
                    lotacao_trabalho : (this.dirty) ? !!this.form.lotacao_trabalho.trim() : true,
                    quadro : (this.dirty) ? !!this.form.quadro.trim() : true,
                    carga_semanal : (this.dirty) ? this.form.carga_semanal != '' : true,
                    formacao : (this.dirty) ? !!this.form.formacao.trim() : true,
                    rit : (this.dirty) ? !!this.form.rit.trim() : true,
                    permuta : (this.dirty) ? !!this.form.permuta.trim() : true,
                    convenio : (this.dirty) ? !!this.form.convenio.trim() : true,
                }
            },
            isValid : function (){
                var validation = this.validation;
                return Object.keys(validation).every(function (key){
                    return validation[key];
                });
            }
        },
        sync : {
            professores : function(){
                return Meteor.users.find({ 'profile.kind' : 'professor' });
            }
        },
        methods : {
            salvar : function(){
                var vue = this;
                this.dirty = true;

                if (!this.isValid)
                    return

                this.sending = true;

                if (this.editing && !!this.form._id.trim()) {
                    return this.update();
                };

                var data = _.omit(this.form, ['_id', 'email', 'senha', '__proto__']);

                Meteor.call("cadastrarProfessor", this.form.email, this.form.senha, data, function(error, result){
                    vue.sending = false;
                    vue.dirty = false;

                    console.log([error, result]);

                    if (error) {
                        return swal('Ocorreu um erro!', 'Não foi possível cadastrar o professor.', 'error');
                    }

                    swal('Sucesso!', 'Professor cadastrado!', 'success');
                    VueUtils.limparCampos(vue.form);
                });
            },
            update : function(){
                var vue = this;
                var data = _.omit(this.form, '_id');

                Professores.update({ _id : this.form._id }, { $set : data }, function(error, affecteds){
                    vue.sending = false;
                    vue.dirty = false;

                    if (error){
                        swal('Ocorreu um erro!', 'Não foi possível atualizar as informações do professor.', 'error');
                    }

                    vue.editing = false;

                    swal('Sucesso!', 'Professor atualizado!', 'success');
                    VueUtils.limparCampos(vue.form);
                });
            },
            delete : function(doc){

                // Caso delete o item que está sendo editado
                if (this.form._id == doc._id) {
                    VueUtils.limparCampos(this.form);
                }

                Professores.remove({ _id : doc._id }, function(err, b){
                    if (err) {
                        swal("Ops!", "Ocorreu algum problema e o professor não pode ser removido.", "error");
                    }

                    swal("Removido!", "O professor foi removido!.", "success");
                })
            },
            // Logica da UI
            deletar : function(doc){
                var vue = this;

                swal({
                    title: "Tem certeza?",
                    text: "Quer mesmo remover esse professor?",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Sim, deletar!",
                    closeOnConfirm: false
                }, function() {
                    vue.delete(doc);
                });
            },
            editar : function(doc){
                this.editing = true;
                this.form = doc;
                $('#nome').focus();
            }
        }
    });
}
