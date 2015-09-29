# Meteor Geo Sandbox

Uma sandbox para um mapa reativo com [Meteor](http://meteor.com) feita para o Code For Curitiba do [Code For Brazil](http://www.openbrazil.org/).

## Uso
Configure seu db com o MongoDB, popule a collections `pontos` com o seguinte tipo de dado:

```json
{
    "nome" : "Título do Marker no mapa",
    "lat" : -12,
    "lon" : -49
}
```

## Customizar e criar ações

No arquivo `client/pontos.js` existe um `@TODO`, ali você pode manipular como quiser o marker do mapa!

## Deploy
Para fazer deploy no heroku você pode seguir o meu tutorial de [como fazer deploy no heroku](http://blog.nerijunior.com/2015/09/22/meteor-heroku-como-fazer-o-deploy-instalacao/) ou usar o [Mupx](https://github.com/arunoda/meteor-up/tree/mupx).


## Desenvolvedores

[Neri Junior](http://github.com/nerijunior/)
