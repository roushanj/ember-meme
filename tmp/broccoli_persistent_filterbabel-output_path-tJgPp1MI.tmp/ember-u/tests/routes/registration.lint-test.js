define('ember-u/tests/routes/registration.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/registration.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/registration.js should pass ESLint.\n');
  });
});