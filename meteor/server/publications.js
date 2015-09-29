Meteor.publish("pontos", function(){
    return Pontos.find();
});
