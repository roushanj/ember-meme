"use strict";



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
define('ember-u/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _emberWelcomePageComponentsWelcomePage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWelcomePageComponentsWelcomePage['default'];
    }
  });
});
define('ember-u/helpers/app-version', ['exports', 'ember', 'ember-u/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _emberUConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _emberUConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('ember-u/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('ember-u/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('ember-u/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-u/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _emberUConfigEnvironment) {
  var _config$APP = _emberUConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('ember-u/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ember-u/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ember-u/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('ember-u/initializers/export-application-global', ['exports', 'ember', 'ember-u/config/environment'], function (exports, _ember, _emberUConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_emberUConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _emberUConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_emberUConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ember-u/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ember-u/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('ember-u/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("ember-u/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('ember-u/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
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
define('ember-u/routes/about', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('ember-u/routes/contact', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('ember-u/routes/emberu', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('ember-u/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    beforeModel: function beforeModel() {
      this.replaceWith('emberu');
    }
  });
});
define('ember-u/routes/login', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('ember-u/routes/login/profile', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('ember-u/routes/registration', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('ember-u/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("ember-u/templates/about", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "5SgM3OV/", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbo\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"right tomster\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"About emberU\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n    Its a basic crud application with couchdb as session manager\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-u/templates/about.hbs" } });
});
define("ember-u/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "FqiqhXsG", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"body\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n     \"],[\"close-element\"],[\"text\",\"\\n\\n  \\n\\n    \"],[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"navbar navbar-inverse navbar-fixed-top\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navbar-header\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"navbar-toggle collapsed\"],[\"static-attr\",\"data-toggle\",\"collapse\"],[\"static-attr\",\"data-target\",\"#navbar\"],[\"static-attr\",\"aria-expanded\",\"false\"],[\"static-attr\",\"aria-controls\",\"navbar\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sr-only\"],[\"flush-element\"],[\"text\",\"Toggle navigation\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"navbar-brand\"],[\"static-attr\",\"href\",\"http://localhost:4200/emberu\"],[\"flush-element\"],[\"text\",\"EmberU\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"navbar\"],[\"static-attr\",\"class\",\"collapse navbar-collapse\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"active\"],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://localhost:4200/emberu\"],[\"flush-element\"],[\"text\",\"Home\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://localhost:4200/login\"],[\"flush-element\"],[\"text\",\"Login\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://localhost:4200/registration\"],[\"flush-element\"],[\"text\",\"Register\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://localhost:4200/about\"],[\"flush-element\"],[\"text\",\"About\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://localhost:4200/contact\"],[\"flush-element\"],[\"text\",\"Contact\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n            \\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"comment\",\"/.nav-collapse \"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-u/templates/application.hbs" } });
});
define("ember-u/templates/contact", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "PyEtew+B", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbo\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"right tomster\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Contact Us\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"emberU Representatives would love to help you\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"choose a destination or answer\\n    any questions you may have.\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n  \\n    \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"mailto:roushan.jha0709@gmail.com\"],[\"flush-element\"],[\"text\",\"roushan.jha0709@gmail.com\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-u/templates/contact.hbs" } });
});
define("ember-u/templates/emberu", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "s0h3HS1u", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbo\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"right tomster\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Welcome!\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"We hope you find exactly what you're looking for in a place to stay.\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n   \\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-u/templates/emberu.hbs" } });
});
define("ember-u/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "xglAI1Ev", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-u/templates/index.hbs" } });
});
define("ember-u/templates/login", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "UL0Z/UnH", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"open-element\",\"html\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"open-element\",\"head\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"open-element\",\"title\",[]],[\"flush-element\"],[\"text\",\"\\n    Login page\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"body\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"\\n    Login Page\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"form\",[]],[\"static-attr\",\"action\",\"http://localhost:4200/login/profile\"],[\"static-attr\",\"name\",\"login\"],[\"flush-element\"],[\"text\",\"\\n    Username\"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"text\"],[\"static-attr\",\"name\",\"userid\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    Password\"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"password\"],[\"static-attr\",\"name\",\"pswrd\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"value\",\"Login\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"reset\"],[\"static-attr\",\"value\",\"Cancel\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-u/templates/login.hbs" } });
});
define("ember-u/templates/login/profile", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "alNwpVmI", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbo\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"right tomster\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Profile\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n    This is your profile\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-u/templates/login/profile.hbs" } });
});
define("ember-u/templates/registration", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "q79a4aWP", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbo\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"right tomster\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Profile\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n    Register Here!!!\\n\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"navbar\"],[\"static-attr\",\"class\",\"collapse navbar-collapse\"],[\"flush-element\"],[\"text\",\"\\n     \"],[\"open-element\",\"form\",[]],[\"static-attr\",\"action\",\"http://localhost:4200/login\"],[\"static-attr\",\"autocomplete\",\"on\"],[\"flush-element\"],[\"text\",\" \\n\\t\\t\\t\\t\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\\t\"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\" Sign up \"],[\"close-element\"],[\"text\",\" \\n\\t\\t\\t\\t\\n\\t\\t\\t\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\" \\n\\t\\t\\t\\t\\t\"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"usernamesignup\"],[\"static-attr\",\"class\",\"uname\"],[\"static-attr\",\"data-icon\",\"u\"],[\"flush-element\"],[\"text\",\"Your username\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\"],[\"open-element\",\"input\",[]],[\"static-attr\",\"id\",\"usernamesignup\"],[\"static-attr\",\"name\",\"usernamesignup\"],[\"static-attr\",\"required\",\"required\"],[\"static-attr\",\"type\",\"text\"],[\"static-attr\",\"placeholder\",\"mysuperusername690\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\" \\n\\t\\t\\t\\t\\t\"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"emailsignup\"],[\"static-attr\",\"class\",\"youmail\"],[\"static-attr\",\"data-icon\",\"e\"],[\"flush-element\"],[\"text\",\" Your email\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\"],[\"open-element\",\"input\",[]],[\"static-attr\",\"id\",\"emailsignup\"],[\"static-attr\",\"name\",\"emailsignup\"],[\"static-attr\",\"required\",\"required\"],[\"static-attr\",\"type\",\"email\"],[\"static-attr\",\"placeholder\",\"mysupermail@mail.com\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \\n\\t\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\" \\n\\t\\t\\t\\t\\t\"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"passwordsignup\"],[\"static-attr\",\"class\",\"youpasswd\"],[\"static-attr\",\"data-icon\",\"p\"],[\"flush-element\"],[\"text\",\"Your password \"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\"],[\"open-element\",\"input\",[]],[\"static-attr\",\"id\",\"passwordsignup\"],[\"static-attr\",\"name\",\"passwordsignup\"],[\"static-attr\",\"required\",\"required\"],[\"static-attr\",\"type\",\"password\"],[\"static-attr\",\"placeholder\",\"eg. X8df!90EO\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\" \\n\\t\\t\\t\\t\\t\"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"passwordsignup_confirm\"],[\"static-attr\",\"class\",\"youpasswd\"],[\"static-attr\",\"data-icon\",\"p\"],[\"flush-element\"],[\"text\",\"Please confirm your password \"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\"],[\"open-element\",\"input\",[]],[\"static-attr\",\"id\",\"passwordsignup_confirm\"],[\"static-attr\",\"name\",\"passwordsignup_confirm\"],[\"static-attr\",\"required\",\"required\"],[\"static-attr\",\"type\",\"password\"],[\"static-attr\",\"placeholder\",\"eg. X8df!90EO\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"signin button\"],[\"flush-element\"],[\"text\",\" \\n\\t\\t\\t\\t\\t\"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"value\",\"Sign up\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \\n\\t\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\n\\t\\t\\t\\t\"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"change_link\"],[\"flush-element\"],[\"text\",\"  \\n\\n\\t                Already a member ?\\n\\t\\t\\t\\t\\t\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://localhost:4200/login\"],[\"static-attr\",\"class\",\"to_register\"],[\"flush-element\"],[\"text\",\" Go and log in \"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"comment\",\"/.nav-collapse \"],[\"text\",\"\\n  \\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-u/templates/registration.hbs" } });
});


define('ember-u/config/environment', ['ember'], function(Ember) {
  var prefix = 'ember-u';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("ember-u/app")["default"].create({"name":"ember-u","version":"0.0.0+428a604a"});
}
//# sourceMappingURL=ember-u.map
