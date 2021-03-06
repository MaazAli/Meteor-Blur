Package.describe({
  summary: "Wrapper for Blur.js, a jQuery plugin that produces psuedo-transparent blurred elements",
  version: "0.0.1",
  git: "https://github.com/MaazAli/Meteor-Blur.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.use('jquery');

  // JS

  api.addFiles('blur.js', 'client');
});
