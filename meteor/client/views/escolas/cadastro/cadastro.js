Template.escolaCadastro.rendered = function(){
    Vue.config.debug = true;
    var vm = new Vue({
        el : "#vue-escola-cadastro",
        data : {
            form : {
                _id : '',
                nome : '',
                endereco : '',
                numero : '',
            },
            dirty : false,
            sending : false,
            escolas : []
        },
        computed : {
            validation : function (){
                return {
                    nome : (this.dirty) ? !!this.form.nome.trim() : true,
                    endereco : (this.dirty) ? !!this.form.endereco.trim() : true,
                    numero : (this.dirty) ? !!this.form.numero.trim() : true,
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
            escolas : function(){
                return Escolas.find()
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

                Escolas.insert(this.form, function(error, _id){
                    vue.sending = false;
                    vue.dirty = false;

                    if (error){
                        swal('Ocorreu um erro!', 'Não foi possível cadastrar a escola.', 'error');
                    }

                    swal('Sucesso!', 'Escola cadastrada!', 'success');
                    VueUtils.limparCampos(vue.form);
                });
            },
            update : function(){
                var vue = this;
                var data = _.omit(this.form, '_id');

                Escolas.update({ _id : this.form._id }, { $set : data }, function(error, affecteds){
                    vue.sending = false;
                    vue.dirty = false;

                    if (error){
                        swal('Ocorreu um erro!', 'Não foi possível atualizar as informações da escola.', 'error');
                    }

                    vue.editing = false;

                    swal('Sucesso!', 'Escola atualizada!', 'success');
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
