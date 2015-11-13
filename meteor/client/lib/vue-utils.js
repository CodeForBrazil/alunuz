VueUtils = {
    validarEmail : function (value){
        console.warn('@todo validarEmail');
        return false;
    },
    limparCampos : function(fields){
        if (typeof fields != 'object')
            return false

        Object.keys(fields).forEach(function (key) {
            fields[key] = '';
        });
    }
};
