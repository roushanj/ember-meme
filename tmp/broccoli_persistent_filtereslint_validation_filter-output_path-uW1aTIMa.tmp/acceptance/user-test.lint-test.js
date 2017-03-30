QUnit.module('ESLint - acceptance/user-test.js');
QUnit.test('should pass ESLint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'acceptance/user-test.js should pass ESLint.\n14:56  - \'assert\' is defined but never used. (no-unused-vars)\n17:65  - \'assert\' is defined but never used. (no-unused-vars)\n20:55  - \'assert\' is defined but never used. (no-unused-vars)');
});
