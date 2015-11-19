Package.describe({
  name: 'alunuz:ui',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'UI depencies for AlunuZ',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('jquery');
  api.addFiles([
      'js/jquery.easing.min.js',
      'js/jquery.fittext.js',
      'js/wow.min.js',
      'js/classie.js',
      'js/cbpAnimatedHeader.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('alunuz:ui');
  api.addFiles('ui-tests.js');
});
