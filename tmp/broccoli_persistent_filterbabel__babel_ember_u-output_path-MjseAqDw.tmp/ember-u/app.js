define('ember-u/app', ['exports', 'ember', 'ember-u/resolver', 'ember-load-initializers', 'ember-u/config/environment'], function (exports, _ember, _emberUResolver, _emberLoadInitializers, _emberUConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _emberUConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberUConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberUResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _emberUConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});