import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('profile');
  this.route('emberu');
  this.route('registration');
  this.route('login', function() {
    this.route('profile');
  });
});

export default Router;
