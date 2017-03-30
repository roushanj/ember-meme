define('ember-u/tests/routes/emberu.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/emberu.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/emberu.js should pass ESLint.\n');
  });
});