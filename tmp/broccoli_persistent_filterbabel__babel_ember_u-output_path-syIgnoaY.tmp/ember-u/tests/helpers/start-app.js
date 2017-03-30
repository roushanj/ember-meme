define('ember-u/tests/helpers/start-app', ['exports', 'ember', 'ember-u/app', 'ember-u/config/environment'], function (exports, _ember, _emberUApp, _emberUConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var attributes = _ember['default'].merge({}, _emberUConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    return _ember['default'].run(function () {
      var application = _emberUApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});