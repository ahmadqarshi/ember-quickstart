import Ember from 'ember';

import ENV from '../config/environment';
const { computed, Controller } =  Ember;

export default Controller.extend({
  VERSION_NUMBER: computed(function() {
    if  ( !Ember.isNone(ENV.APP.VERSION)) {
      return ENV.APP.VERSION;
    }
    else {
      return 'Version not available';
    }
  }),
  FOO_VALUE: computed(function() {
    if  ( !Ember.isNone(ENV.APP.FOO)) {
      return ENV.APP.FOO;
    }
    else {
      return 'Foo not available';
    }
  })
});
