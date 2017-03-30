define('ember-u/tests/helpers/resolver', ['exports', 'ember-u/resolver', 'ember-u/config/environment'], function (exports, _emberUResolver, _emberUConfigEnvironment) {

  var resolver = _emberUResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emberUConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberUConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});