Package.describe({
  name: 'ccan:cssreset',
  summary: "Eric Meyer's Reset CSS v.2.0 (http://meyerweb.com/eric/tools/css/reset/)",
  version: '1.0.0',
  git: 'https://github.com/cagdascan/meteor-cssreset'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('ccan:cssreset.css', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ccan:cssreset');
  api.addFiles('ccan:cssreset-tests.css', 'client');
});
