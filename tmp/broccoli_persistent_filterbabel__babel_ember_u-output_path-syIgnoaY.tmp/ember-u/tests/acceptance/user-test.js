define('ember-u/tests/acceptance/user-test', ['exports', 'qunit', 'ember-u/tests/helpers/module-for-acceptance'], function (exports, _qunit, _emberUTestsHelpersModuleForAcceptance) {

  (0, _emberUTestsHelpersModuleForAcceptance['default'])('Acceptance | user');

  (0, _qunit.test)('visiting /user', function (assert) {
    visit('/user');

    andThen(function () {
      assert.equal(currentURL(), '/user');
    });
  });

  (0, _qunit.test)('should show ember-u as the home page', function (assert) {});

  (0, _qunit.test)('should link to information about the company.', function (assert) {});

  (0, _qunit.test)('should link to contact information.', function (assert) {});
});