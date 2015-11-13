Template.professorCadastro.rendered = function(){
    Vue.config.debug = true;
    var vm = new Vue({
        el : "#vue-professor-cadastro",
        data : {
            form : {
                _id : '',
                nome : '',
                matricula : '',
                cpf : '',
                telefone : '',
                email : '',
                endereco : '',
                numero : '',
                carreira : '',
                cargo : '',
                nivel : '',
                area_atuacao : '',
                orgao_lotacao : '',
                lotacao_trabalho : '',
                quadro : '',
                carga_semanal : '',
                formacao : '',
                rit : '',
                permuta : '',
                convenio : '',
                lat : '',
                lng : '',
            },
            dirty : false,
            sending : false,
            professores : []
        },
        computed : {
            validation : function (){
                return {
                    nome : (this.dirty) ? !!this.form.nome.trim() : true,
                    matricula : (this.dirty) ? !!this.form.matricula.trim() : true,
                    cpf : (this.dirty) ? !!this.form.cpf.trim() : true,
                    telefone : (this.dirty) ? !!this.form.telefone.trim() : true,
                    email : (this.dirty) ? !!this.form.email.trim() : true,
                    endereco : (this.dirty) ? !!this.form.endereco.trim() : true,
                    numero : (this.dirty) ? !!this.form.numero.trim() : true,
                    carreira : (this.dirty) ? !!this.form.carreira.trim() : true,
                    cargo : (this.dirty) ? !!this.form.cargo.trim() : true,
                    nivel : (this.dirty) ? !!this.form.nivel.trim() : true,
                    area_atuacao : (this.dirty) ? !!this.form.area_atuacao.trim() : true,
                    orgao_lotacao : (this.dirty) ? !!this.form.orgao_lotacao.trim() : true,
                    lotacao_trabalho : (this.dirty) ? !!this.form.lotacao_trabalho.trim() : true,
                    quadro : (this.dirty) ? !!this.form.quadro.trim() : true,
                    carga_semanal : (this.dirty) ? !!this.form.carga_semanal.trim() : true,
                    formacao : (this.dirty) ? !!this.form.formacao.trim() : true,
                    rit : (this.dirty) ? !!this.form.rit.trim() : true,
                    permuta : (this.dirty) ? !!this.form.permuta.trim() : true,
                    convenio : (this.dirty) ? !!this.form.convenio.trim() : true,
                    lat : (this.dirty) ? !!this.form.lat.trim() : true,
                    lng : (this.dirty) ? !!this.form.lng.trim() : true,
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
                return Professores.find()
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

                Professores.insert(this.form, function(error, _id){
                    vue.sending = false;
                    vue.dirty = false;

                    if (error){
                        swal('Ocorreu um erro!', 'Não foi possível cadastrar o professor.', 'error');
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
            editar : function(doc){
                this.editing = true;
                this.form = doc;
                $('#nome').focus();
            }
        }
    });
}
