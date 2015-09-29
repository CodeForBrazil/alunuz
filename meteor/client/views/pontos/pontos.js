// Alguns pontos da urbs estão com ',' e em String, essa função converte eles para float
var stringToFloat = function(str){
    if (typeof str == "String")
        return parseFloat( str.replace(/,/ig, '.') );

    return str;
}

Template.pontos.helpers({
    // Envia pontos para o layout "main"
    pontos: function() {
        return Pontos.find().fetch()
    },
    mapOptions: function() {
        if (GoogleMaps.loaded()) {
            return {
                // Centro de Curitiba
                center: new google.maps.LatLng(-25.4451518, -49.2874026),
                zoom: 12
            };
        }
    }
});

// Quando o template for criado
Template.pontos.onCreated(function() {
    Meteor.subscribe("pontos");

    // quando o mapa estiver criado
    GoogleMaps.ready('pontos', function(map) {
        var pontos = Pontos.find().fetch();
        var markers = {};

        // Observa mudanças nos pontos (reativamente)
        Pontos.find().observe({
            // Quando um ponto é adicionado
            added : function(doc){
                var lat = stringToFloat(doc.POI_LAT);
                var lon = stringToFloat(doc.POI_LON);

                var marker = new google.maps.Marker({
                    animation : google.maps.Animation.DROP,
                    position : new google.maps.LatLng(lat, lon),
                    title : doc.POI_NAME,
                    map : map.instance,
                    id : doc._id
                });

// TESTE




                // @TODO Pode-se fazer o que quiser com o marker nesse ponto







                //QUANDO UM PONTO É CLICADO
  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">' + doc.POI_NAME + '</h1>'+
      '<div id="bodyContent">'+
      '<h2> Quadro de Vagas</h2>'+
      '<h4><strong>Capacidade: </strong> 415 Alunos</h4>'+
      '<h4><strong>Vagas Disponíveis: </strong> 25 Vagas abertas</h4>'+
      '<p><strong>Endereço: </strong>Rua X, Bairro Y | Curitiba - PR <br />'+
      '<p><strong>Funcionamento: </strong>SEG-SEX - Período Integral<br />'+
      '<p><strong>Telefone: </strong>4444-1111<br />'+
      '<p><strong>E-mail: </strong>email@email.com<br />'+
      ''+
      '</div>'+
      '</div>';

      

                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });

                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.open(map.instance,marker);
                });
                // FIM 

                markers[doc._id] = marker;
            },
            // Quando for alterado
            changed : function(newDoc, oldDoc){
                markers[newDoc._id].setPosition({ lat : stringToFloat(newDoc.lat), lng : stringToFloat(newDoc.lon) });
            },
            // Quando um ponto é removido
            removed : function(oldDoc){
                markers[oldDoc._id].setMap(null);
                google.maps.event.clearInstanceListeners(markers[oldDoc._id]);
                delete markers[oldDoc._id];
            }
        });

});
});
