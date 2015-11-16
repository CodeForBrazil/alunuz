# AlunuZ

Gerenciamento escolar da A à Z

AlunuZ é uma plataforma para gestão escolar seguindo os padrões brasileiros, modular e de fácil adaptação para qualquer outro tipo de gerenciamento.

Feito usando pelo [Code For Curitiba](http://openbrazil.org) usando [Meteor](http://meteor.com)

### Índice

- [Instalação](#instalacao)
- [Contribuindo](#contribuindo)
- [Deploy](#deploy)

<a name="instalacao"></a>
### Instalacao

```shell
git clone https://github.com/CodeForBrazil/alunuz/
cd alunuz/meteor
meteor
```

<a name="contribuindo"></a>
### Contribuindo

Em [Issues](https://github.com/CodeForBrazil/alunuz/issues) existe uma lista de itens a serem feitos ou corrigidos, sinta-se livre para contribuido com o projeto. :)

<a name="deploy"></a>
### Deploy

```shell
cd alunuz
git subtree push --prefix meteor heroku master
```

Nós usamos o heroku para fazer deploy da plataforma, então se você possui o heroku já configurado é só executar o comando acima no diretório do alunuz, caso não tenha configurado pode ver aqui [como fazer o deploy no heroku](http://blog.nerijunior.com/2015/09/22/meteor-heroku-como-fazer-o-deploy-instalacao/).
