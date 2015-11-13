Professores = new Mongo.Collection("professores");

ProfessoresSchema = new SimpleSchema({
    nome : {
        type : String,
        label : "Nome",
    },
    matricula : {
        type : Number,
        label : "Matrículo",
    },
    cpf : {
        type : Number,
        label : "CPF",
    },
    telefone : {
        type : String,
        label : "Telefone",
    },
    email : {
        type : String,
        label : "E-mail",
    },
    endereco : {
        type : String,
        label : "Endereço",
    },
    numero : {
        type : Number,
        label : "Número",
    },
    carreira : {
        type : String,
        label : "Carreira",
    },
    cargo : {
        type : String,
        label : "Cargo",
    },
    nivel : {
        type : String,
        label : "Nível",
    },
    area_atuacao : {
        type : String,
        label : "Area de atuação",
    },
    orgao_lotacao : {
        type : String,
        label : "Orgão de Lotação",
    },
    lotacao_trabalho : {
        type : String,
        label : "Lotação de Trabalho",
    },
    quadro : {
        type : String,
        label : "Quadro",
    },
    carga_semanal : {
        type : Number,
        label : "Carga semanal",
    },
    formacao : {
        type : String,
        label : "Formação",
    },
    rit : {
        type : String,
        label : "RIT",
    },
    permuta : {
        type : String,
        label : "Permuta",
    },
    convenio  : {
        type : String,
        label : "Convênio",
    },
    lat : {
        type : Number,
        label : "Lat",
    },
    lng : {
        type : Number,
        label : "Lng",
    },
});

Professores.attachSchema(ProfessoresSchema);
