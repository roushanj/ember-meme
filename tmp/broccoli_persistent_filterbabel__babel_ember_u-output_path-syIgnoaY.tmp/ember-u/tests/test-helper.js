define('ember-u/tests/test-helper', ['exports', 'ember-u/tests/helpers/resolver', 'ember-qunit'], function (exports, _emberUTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_emberUTestsHelpersResolver['default']);
});