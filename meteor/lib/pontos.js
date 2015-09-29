Pontos = new Mongo.Collection("pontos");
Pontos.allow({
    insert: function(){
        return false;
    },
    update: function(){
        return false;
    },
    remove: function(){
        return false;
    }
});
