import { test } from 'qunit';
import moduleForAcceptance from 'ember-u/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | user');

test('visiting /user', function(assert) {
  visit('/user');

  andThen(function() {
    assert.equal(currentURL(), '/user');
  });
});

test('should show ember-u as the home page', function (assert) {
});

test('should link to information about the company.', function (assert) {
});

test('should link to contact information.', function (assert) {
});
