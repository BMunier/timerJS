import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('stopwatch');
  this.route('tabata');
  this.route('amrap');
  this.route('emom');
});

export default Router;
