define('ember-u/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-u/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _emberUConfigEnvironment) {
  var _config$APP = _emberUConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});