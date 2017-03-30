define('ember-u/router', ['exports', 'ember', 'ember-u/config/environment'], function (exports, _ember, _emberUConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _emberUConfigEnvironment['default'].locationType,
    rootURL: _emberUConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('about');
    this.route('contact');
    this.route('profile');
    this.route('emberu');
    this.route('registration');
    this.route('login', function () {
      this.route('profile');
    });
  });

  exports['default'] = Router;
});